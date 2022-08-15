import { styled } from '@mui/material/styles';

export const StyledAuthForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 32,
    boxShadow: theme.shadows[1],
    borderRadius: 8,
    background: theme.palette.background.paper,
    '& > *:not(:first-child)': {
        marginTop: 24,
    },
    '& > hr': {
        width: '100%',
        color: theme.palette.grey[300],
    },
}));
