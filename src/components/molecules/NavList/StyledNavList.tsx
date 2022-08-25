import { styled } from '@mui/material/styles';
export const StyledNavList = styled('nav')(({ theme }) => ({
    display: 'flex',
    '& >*:not(:first-child)': {
        marginLeft: 42,
    },
}));
