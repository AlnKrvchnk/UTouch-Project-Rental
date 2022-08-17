import { styled } from '@mui/material/styles';

export const StyledPagination = styled('div')(({ theme }) => ({
    '>button': {
        color: theme.palette.primary.main,
    },
}));
