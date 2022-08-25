import { styled } from '@mui/material/styles';

export const StyledCatalog = styled('div')(({ theme }) => ({
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 40,
    paddingBottom: 24,
    display: 'grid',
    gridTemplateRows: '60px 1fr',
    gridTemplateColumns: '340px 1fr',
    gridRowGap: 30,
    gridColumnGap: 20,
    [theme.breakpoints.up('xl')]: {
        paddingLeft: 195,
        paddingRight: 195,
    },
    '& .filter': {
        width: 340,
        marginRight: 20,
    },
    '& .content': {
        width: '100%',
    },
}));
