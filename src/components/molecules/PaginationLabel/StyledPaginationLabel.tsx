import { styled } from '@mui/material/styles';

export const StyledPaginationLabel = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    '&>*:last-child': {
        marginLeft: 24,
    },
}));
