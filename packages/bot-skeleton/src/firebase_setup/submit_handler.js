import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import BlockConversion from '../scratch/backward-compatibility';
import { observer as globalObserver } from '../utils/observer';
import { removeLimitedBlocks } from '../utils/workspace';
import {loadBlocks,loadWorkspace} from '../scratch/utils/index'
import DBotStore from '../scratch/dbot-store';
import {saveWorkspaceToRecent} from '../utils/local-storage';
import { save_types } from '../constants/save-type';


const showInvalidStrategyError = () => {
    const error_message = localize('XML file contains unsupported elements. Please check or modify file.');
    globalObserver.emit('ui.log.error', error_message);
};


export const readStorage = async () => {
    try {
        // Reference to the XML file in the Storage bucket
        const xmlFileRef = ref(storage, '/bots/Entry_Touch_BBot.xml');

        // Get the download URL for the XML file
        const url = await getDownloadURL(xmlFileRef);

        // Fetch the XML file using the download URL
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch XML');
        }

        const xmlString = await response.text();

        // // Parse the XML string into an XML Document if needed
        // const parser = new DOMParser();
        // const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
        // const rootElement = xmlDoc.documentElement;

        // Check if XML can be parsed correctly.
        try {
            const xmlDoc = new DOMParser().parseFromString(xmlString, 'application/xml');

            if (xmlDoc.getElementsByTagName('parsererror').length) {
                return showInvalidStrategyError();
            }
        } catch (e) {
            return showInvalidStrategyError();
        }

        let xml;
        let workspace = Blockly.derivWorkspace;
        let file_name = 'apollo_v1';

        // Check if XML can be parsed into a strategy.
        try {
            xml = Blockly.Xml.textToDom(xmlString);
        } catch (e) {
            return showInvalidStrategyError();
        }

        const blockConversion = new BlockConversion();
        xml = blockConversion.convertStrategy(xml, 'Incompatible Bot');

        const blockly_xml = xml.querySelectorAll('block');

        // Check if there are any blocks in this strategy.
        if (!blockly_xml.length) {
            return showInvalidStrategyError();
        }

        // Check if all block types in XML are allowed.
        const has_invalid_blocks = Array.from(blockly_xml).some(block => {
            const block_type = block.getAttribute('type');
            return !Object.keys(Blockly.Blocks).includes(block_type);
        });

        if (has_invalid_blocks) {
            return showInvalidStrategyError();
        }

        try {
            const is_collection = xml.hasAttribute('collection') && xml.getAttribute('collection') === 'true';
            const event_group = is_collection ? `load_collection${Date.now()}` : `dbot-load${Date.now()}`;
            Blockly.Events.setGroup(event_group);
            removeLimitedBlocks(
                Blockly.derivWorkspace,
                Array.from(blockly_xml).map(xml_block => xml_block.getAttribute('type'))
            );
            if (is_collection) {
                loadBlocks(xml, {}, event_group, Blockly.derivWorkspace);
            }else{
                await loadWorkspace(xml, event_group, workspace);

                const is_main_workspace = workspace === Blockly.derivWorkspace;
                if (is_main_workspace) {
                    const { save_modal } = DBotStore.instance;

                    save_modal.updateBotName(file_name);
                    workspace.clearUndo();
                    workspace.current_strategy_id = Blockly.utils.genUid();
                    await saveWorkspaceToRecent(xml, save_types.UNSAVED,true);
                }
            }
            
        } catch (error) {
            console.error(error); // eslint-disable-line
            return showInvalidStrategyError();
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
