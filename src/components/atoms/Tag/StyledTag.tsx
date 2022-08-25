import { styled } from '@mui/material/styles';
export const StyledTag = styled('button')(({ theme }) => ({
    color: theme.palette.text.secondary,
    padding: 16,
    fontSize: 14,
    fontWidth: '500',
    fontFamily: theme.typography.fontFamily,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: '0.4s all ease',
    '&:hover': {
        color: theme.palette.primary.light,
    },
    '&:active,&.active': {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
        '&:hover': {
            background: theme.palette.primary.dark,
        },
    },
}));
