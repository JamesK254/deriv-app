import React from 'react';
import { APIProvider, useResidenceList } from '@deriv/api';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CountrySelector from '../CountrySelector';

jest.mock('@deriv/api', () => ({
    ...jest.requireActual('@deriv/api'),
    useResidenceList: jest.fn(),
}));

const mockUseResidenceList = useResidenceList as jest.MockedFunction<typeof useResidenceList>;

const renderComponents = () => {
    render(
        <APIProvider>
            <CountrySelector label='Country' name='country' />
        </APIProvider>
    );
};

beforeEach(() => {
    mockUseResidenceList.mockReturnValue(
        // @ts-expect-error need a way to mock useQuery data
        {
            data: [
                {
                    identity: {
                        services: {
                            idv: {
                                is_country_supported: 0,
                            },
                        },
                    },
                    text: 'Indonesia',
                    value: 'id',
                },
            ],
        }
    );
});

describe('CountrySelector', () => {
    it('should render CountrySelector component', () => {
        renderComponents();
        const inputField = screen.getByRole('combobox', { name: /Country/i });
        expect(inputField).toBeInTheDocument();
    });

    it('should show residence list when user click on country selector', () => {
        renderComponents();
        const inputField = screen.getByRole('combobox', { name: /Country/i });
        userEvent.click(inputField);
        expect(screen.getByText('Indonesia')).toBeInTheDocument();
    });

    it('should change the value of combobox to be Indonesia', () => {
        renderComponents();
        const inputField = screen.getByRole('combobox', { name: /Country/i });
        userEvent.click(inputField);
        const dropDown = screen.getByText('Indonesia');
        userEvent.click(dropDown);
        expect(inputField).toHaveValue('Indonesia');
    });
});
