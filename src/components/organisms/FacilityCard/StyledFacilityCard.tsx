import { styled } from '@mui/material/styles';
export const StyledFacilityCard = styled('div')(({ theme }) => ({
    background: theme.palette.background.paper,
    marginBottom: 1,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 18,
    alignItems: 'flex-end',
    '> .controls >*:not(:first-child)': {
        marginLeft: 10,
    },
}));
