import { styled } from '@mui/material/styles';

export const StyledFacilityCardControls = styled('div')(({ theme }) => ({
    display: 'flex',
    '>*:not(:first-child)': {
        marginLeft: 10,
    },
}));
