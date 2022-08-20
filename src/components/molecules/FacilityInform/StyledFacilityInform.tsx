import { styled } from '@mui/material/styles';
export const StyledFacilityInform = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    '> .img': {
        width: 360,
        height: 255,
        marginRight: 24,
        '>img': {
            objectFit: 'cover',
            height: '100%',
            width: '100%',
        },
    },
    '> .inform': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '>*:last-child': {
            fontSize: 18,
            fontWidth: '500',
        },
    },
}));
