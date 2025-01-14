import React from 'react';
import Cookies from 'js-cookie';
import WS from 'Services/ws-methods';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@deriv-com/analytics';
import { BreakpointProvider } from '@deriv/quill-design';
import { APIProvider } from '@deriv/api';
import { CashierStore } from '@deriv/cashier';
import { CFDStore } from '@deriv/cfd';
import {
    POIProvider,
    initFormErrorMessages,
    setSharedCFDText,
    setUrlLanguage,
    setWebsocket,
    useOnLoadTranslation,
    LocalStore,
    getAppId,
} from '@deriv/shared';
import { StoreProvider, ExchangeRatesProvider } from '@deriv/stores';
import { getLanguage, initializeTranslations } from '@deriv/translations';
import { CFD_TEXT } from '../Constants/cfd-text';
import { FORM_ERROR_MESSAGES } from '../Constants/form-error-messages';
import AppContent from './AppContent';
import initHotjar from '../Utils/Hotjar';
import 'Sass/app.scss';

const AppWithoutTranslation = ({ root_store }) => {
    const l = window.location;
    const base = l.pathname.split('/')[1];
    const has_base = /^\/(br_)/.test(l.pathname);
    const [is_translation_loaded] = useOnLoadTranslation();
    const initCashierStore = () => {
        root_store.modules.attachModule('cashier', new CashierStore(root_store, WS));
        root_store.modules.cashier.general_store.init();
    };
    const initCFDStore = () => {
        root_store.modules.attachModule('cfd', new CFDStore({ root_store, WS }));
    };

    React.useEffect(() => {
        initCashierStore();
        initCFDStore();
        const loadSmartchartsStyles = () => {
            import('@deriv/deriv-charts/dist/smartcharts.css');
        };

        const loadExternalScripts = () => {
            // Load external scripts once the app is fully loaded
            setTimeout(() => {
                initHotjar(root_store.client);
            }, 5000);
        };

        initializeTranslations();
        if (process.env.RUDDERSTACK_KEY) {
            const config = {
                growthbookKey:
                    process.env.IS_GROWTHBOOK_ENABLED === 'true' ? process.env.GROWTHBOOK_CLIENT_KEY : undefined,
                growthbookDecryptionKey:
                    process.env.IS_GROWTHBOOK_ENABLED === 'true' ? process.env.GROWTHBOOK_DECRYPTION_KEY : undefined,
                rudderstackKey: process.env.RUDDERSTACK_KEY,
            };
            Analytics.initialise(config);
            Analytics.setAttributes({
                account_type: LocalStore?.get('active_loginid')?.substring(0, 2) ?? 'unlogged',
                app_id: getAppId(),
                device_type: root_store?.ui?.is_mobile ? 'mobile' : 'desktop',
                device_language: navigator?.language || 'en-EN',
                user_language: getLanguage().toLowerCase(),
                country: Cookies.get('clients_country') || Cookies.getJSON('website_status'),
            });
        }

        // TODO: [translation-to-shared]: add translation implemnentation in shared
        setUrlLanguage(getLanguage());
        initFormErrorMessages(FORM_ERROR_MESSAGES);
        setSharedCFDText(CFD_TEXT);
        root_store.common.setPlatform();
        loadSmartchartsStyles();

        window.addEventListener('load', loadExternalScripts);

        return () => {
            window.removeEventListener('load', loadExternalScripts);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const platform_passthrough = {
        root_store,
        WS,
    };

    setWebsocket(WS);

    React.useEffect(() => {
        if (!root_store.client.email) {
            Analytics.reset();
        }
    }, [root_store.client.email]);

    return (
        <>
            {is_translation_loaded ? (
                <Router basename={has_base ? `/${base}` : null}>
                    <StoreProvider store={root_store}>
                        <BreakpointProvider>
                            <APIProvider>
                                <POIProvider>
                                    <StoreProvider store={root_store}>
                                        <ExchangeRatesProvider>
                                            <AppContent passthrough={platform_passthrough} />
                                        </ExchangeRatesProvider>
                                    </StoreProvider>
                                </POIProvider>
                            </APIProvider>
                        </BreakpointProvider>
                    </StoreProvider>
                </Router>
            ) : (
                <></>
            )}
        </>
    );
};

AppWithoutTranslation.propTypes = {
    root_store: PropTypes.object,
};
const App = withTranslation()(AppWithoutTranslation);

export default App;
