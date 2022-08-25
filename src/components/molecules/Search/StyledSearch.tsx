import { styled } from '@mui/material/styles';

export const StyledSearch = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    '& >*:first-child': {
        width: '100%',
    },
    '& >*:last-child': {
        marginLeft: 24,
        maxWidth: 240,
        width: '16%',
    },
}));
