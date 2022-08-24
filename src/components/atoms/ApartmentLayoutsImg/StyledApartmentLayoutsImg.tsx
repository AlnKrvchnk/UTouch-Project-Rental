import { styled } from '@mui/material/styles';

export const StyledApartmentLayoutsImg = styled('div')(({ theme }) => ({
    '>img': {
        width: '100%',
        height: '100%',
        cursor: 'pointer',
    },
    maxWidth: 'calc( 50% - 16px )',
}));
