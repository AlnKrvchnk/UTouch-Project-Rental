import { styled } from '@mui/material/styles';

export const StyledFilterChipsList = styled('div')(({ theme }) => ({
    whiteSpace: 'nowrap',
    overflowX: 'scroll',
    overflowY: 'hidden',
    '&::-webkit-scrollbar': {
        height: 4,
        width: 3,
    },
    '&::-webkit-scrollbar-track': {
        background: theme.palette.background.default,
        borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.light,
        borderRadius: '3px',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));
