import { styled } from '@mui/material/styles';

export const StyledAppBar = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: '100',
    background: theme.palette.background.default,
    '& > *': {
        background: theme.palette.background.paper,
        marginBottom: 1,
        paddingLeft: 24,
        paddingRight: 24,
        [theme.breakpoints.up('xl')]: {
            paddingLeft: 195,
            paddingRight: 195,
        },
    },
}));
