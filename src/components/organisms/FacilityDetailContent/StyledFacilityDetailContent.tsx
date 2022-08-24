import { styled } from '@mui/material/styles';

export const StyledFacilityDetailContent = styled('div')(({ theme }) => ({
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 40,
    paddingBottom: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridRowGap: 25,
    gridColumnGap: 20,
    [theme.breakpoints.up('xl')]: {
        paddingLeft: 195,
        paddingRight: 195,
    },
    '.title': { gridColumn: 'span 12' },
    '.benefits': { gridColumn: 'span 12' },
    '.general': { gridColumn: 'span 10' },
    '.description': { gridColumn: 'span 10' },
    '.sales': { gridColumn: 'span 4' },
    '.commission': { gridColumn: 'span 6' },
    '.payment': { gridColumn: 'span 10' },
    '.documentation': { gridColumn: 'span 10' },
    '.layout': { gridColumn: 'span 5' },
    '.interiorFeatures': { gridColumn: 'span 5' },
    '.news': { gridColumn: 'span 10' },
    '.map': { gridColumn: 'span 10' },
    '.owner': { gridColumn: 'span 2' },
    '.controls': { gridColumn: 'span 2', height: 'fit-content' },
}));
