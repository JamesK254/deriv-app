import LZString from 'lz-string';
import localForage from 'localforage';
import DBotStore from '../scratch/dbot-store';
import { save_types } from '../constants/save-type';


/**
 * Save workspace to localStorage
 * @param {String} save_type // constants/save_types.js (unsaved, local, googledrive)
 * @param {Blockly.Events} event // Blockly event object
 */
export const saveWorkspaceToRecent = async (xmlOrFolderPath, save_type = save_types.UNSAVED, isApolloBots = false) => {
    try {
        // If isFolderBot is false, treat xmlOrFolderPath as an XML object
        let xml = xmlOrFolderPath;
        
        console.log('new bot being saved', xml);
        if (!xml) {
            throw new Error('Invalid XML or folder path provided.');
        }

        // Process and save the workspace
        xml.setAttribute('is_dbot', 'true');

        const {
            load_modal: { updateListStrategies },
            save_modal,
        } = DBotStore.instance;

        const workspace_id = Blockly.derivWorkspace.current_strategy_id || Blockly.utils.genUid();
        const workspaces = isApolloBots ? await getSavedWorkspaces(true) : await getSavedWorkspaces();
        const current_xml = Blockly.Xml.domToText(xml);
        const current_timestamp = Date.now();
        const current_workspace_index = workspaces.findIndex(workspace => workspace.id === workspace_id);

        if (current_workspace_index >= 0) {
            const current_workspace = workspaces[current_workspace_index];
            current_workspace.xml = current_xml;
            current_workspace.name = save_modal.bot_name;
            current_workspace.timestamp = current_timestamp;
            current_workspace.save_type = save_type;
        } else {
            workspaces.push({
                id: workspace_id,
                timestamp: current_timestamp,
                name: !isApolloBots ? save_modal.bot_name : 'apollo v1',
                xml: current_xml,
                save_type,
            });
        }

        workspaces
            .sort((a, b) => {
                return new Date(a.timestamp) - new Date(b.timestamp);
            })
            .reverse();

        if (workspaces.length > 10) {
            workspaces.pop();
        }
        updateListStrategies(workspaces);
        if (isApolloBots) {
            localForage.setItem('apollo_workspaces', LZString.compress(JSON.stringify(workspaces)));
            console.log('apollo bot saved succefully');
        } else {
            localForage.setItem('saved_workspaces', LZString.compress(JSON.stringify(workspaces)));
        }
    } catch (error) {
        // Handle any errors that occur during the saving process
        console.error('Error while saving workspace:', error);
    }
};

export const getSavedWorkspaces = async (isApolloBots = false) => {
    try {
        if (isApolloBots) {
            return JSON.parse(LZString.decompress(await localForage.getItem('apollo_workspaces'))) || [];
        } else {
            return JSON.parse(LZString.decompress(await localForage.getItem('saved_workspaces'))) || [];
        }
    } catch (e) {
        return [];
    }
};

export const removeExistingWorkspace = async workspace_id => {
    const workspaces = await getSavedWorkspaces();
    const current_workspace_index = workspaces.findIndex(workspace => workspace.id === workspace_id);

    if (current_workspace_index >= 0) {
        workspaces.splice(current_workspace_index, 1);
    }

    await localForage.setItem('saved_workspaces', LZString.compress(JSON.stringify(workspaces)));
};
