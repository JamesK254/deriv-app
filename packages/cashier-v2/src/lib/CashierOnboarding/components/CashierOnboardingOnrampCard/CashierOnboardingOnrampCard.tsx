import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActiveAccount } from '@deriv/api';
import { onboardingOnrampIcons } from '../../constants/icons';
import { CashierOnboardingCard } from '../CashierOnboardingCard';
import { CashierOnboardingIconMarquee } from '../CashierOnboardingIconMarquee';

const CashierOnboardingOnrampCard: React.FC = () => {
    const { data: activeAccount } = useActiveAccount();
    const history = useHistory();

    return (
        <CashierOnboardingCard
            description='Choose any of these exchanges to buy cryptocurrencies:'
            onClick={() => history.push('/cashier-v2/on-ramp')}
            title={
                activeAccount?.currency_config?.is_crypto
                    ? 'Buy cryptocurrencies'
                    : 'Buy cryptocurrencies via fiat onramp'
            }
        >
            <CashierOnboardingIconMarquee icons={onboardingOnrampIcons.light} />
        </CashierOnboardingCard>
    );
};

export default CashierOnboardingOnrampCard;
