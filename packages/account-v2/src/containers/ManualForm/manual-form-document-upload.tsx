import React from 'react';
import { Text } from '@deriv-com/ui';
import FormDocumentUploadField from '../../components/FormFields/FormDocumentUploadField';
import { TManualDocumentTypes } from '../../constants/manualFormConstants';
import { getTitleForDocumentUpload, getUploadConfig } from '../../utils/manual-form-utils';

type TManualFormDocumentUploadProps = { selectedDocument: TManualDocumentTypes };

export const ManualFormDocumentUpload = ({ selectedDocument }: TManualFormDocumentUploadProps) => {
    const uploadConfig = getUploadConfig(selectedDocument);

    return (
        <div className='flex flex-col gap-1200 pt-1200 border-t-solid-grey-2 border-solid border-t-100'>
            <Text>{getTitleForDocumentUpload(selectedDocument)}</Text>
            <div className='flex flex-col lg:flex-row gap-1200 w-full justify-between'>
                {uploadConfig.map(upload => (
                    <div className='w-full h-[22rem]' key={upload.pageType}>
                        <FormDocumentUploadField
                            buttonText='Drop file or click here to upload'
                            className='h-full'
                            description={upload.text}
                            fileFormats={['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf']}
                            icon={upload.icon}
                            maxSize={8388608}
                            name={upload.pageType}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
