import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
export const StyledNavItem = styled(NavLink)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    fontSize: 15,
    fontWidth: '500',
    fontFamily: theme.typography.fontFamily,
    display: 'flex',
    alignItems: 'center',
    '& >*>*': {
        marginRight: 16,
    },
    '&:hover': {
        color: theme.palette.primary.light,
    },
    '&.active': {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.dark,
        },
    },
}));
