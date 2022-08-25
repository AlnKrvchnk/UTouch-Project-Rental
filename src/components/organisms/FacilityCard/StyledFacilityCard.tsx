import { styled } from '@mui/material/styles';
export const StyledFacilityCard = styled('div')(({ theme }) => ({
    background: theme.palette.background.paper,
    marginBottom: 1,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 18,
    alignItems: 'flex-end',
    boxShadow: theme.shadows[3],

    ':first-of-type': {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    ':last-of-type': {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
}));
