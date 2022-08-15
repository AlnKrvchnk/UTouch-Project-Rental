import { styled } from '@mui/material/styles';
export const StyledFacilityInform = styled('div')(({ theme }) => ({
    display: 'flex',
    '> .img': {
        maxWidth: 360,
        width: '100%',
        height: 'auto',
        marginRight: 24,
        '>img': {
            objectFit: 'cover',
            height: '100%',
            width: '100%',
        },
    },
    '> .inform': {
        '.label': {
            marginTop: 16,
            marginBottom: 24,
            '>*:not(:first-child)': {
                marginLeft: 8,
            },
        },
        '>*:last-child': {
            marginTop: 72,
            fontSize: 18,
            fontWidtg: 500,
        },
        '>*': {
            display: 'flex',
        },
    },
}));
