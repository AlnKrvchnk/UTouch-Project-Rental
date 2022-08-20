import { styled } from '@mui/material/styles';

export const StyledFavorites = styled('div')(({ theme }) => ({
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 40,
    paddingBottom: 24,
    
    [theme.breakpoints.up('xl')]: {
        paddingLeft: 195,
        paddingRight: 195,
    },
    
}));
