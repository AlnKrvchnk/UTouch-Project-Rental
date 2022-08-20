import { styled } from '@mui/material/styles';
export const StyledFacilityChips = styled('div')(({ theme }) => ({
    marginTop: 16,
    marginBottom: 24,
    display: 'flex',
    overflow: 'hidden',
    '>*:not(:first-child)': {
        marginLeft: 8,
    },
}));
