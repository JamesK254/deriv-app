import React from 'react';
import { useUIContext } from '@/components';
import { useRegulationSwitcher } from '@/hooks';
import { RegulationModal } from '@/modals';
import { Provider } from '@deriv/library';
import { LabelPairedCircleInfoMdRegularIcon } from '@deriv/quill-icons';
import { Tab, Tabs, Text } from '@deriv-com/ui';

const RegulationSwitcherDesktop = () => {
    const { uiState } = useUIContext();
    const { show } = Provider.useModal();
    const { buttons, handleButtonClick } = useRegulationSwitcher();
    const activeRegulation = uiState.regulation;

    return (
        <div className='flex items-center gap-8'>
            <div className='flex items-center gap-8'>
                <Text size='sm'>Regulation:</Text>
                <LabelPairedCircleInfoMdRegularIcon
                    className='cursor-pointer'
                    onClick={() => show(<RegulationModal />)}
                />
            </div>
            <Tabs
                TitleFontSize='sm'
                activeTab={activeRegulation}
                className='flex rounded-sm p-4 w-[200px] h-40'
                key={activeRegulation}
                onChange={index => handleButtonClick(buttons[index].label)}
                variant='primary'
            >
                {buttons.map(button => (
                    <Tab className='rounded-xs' key={button.label} title={button.label} />
                ))}
            </Tabs>
        </div>
    );
};

export default RegulationSwitcherDesktop;
