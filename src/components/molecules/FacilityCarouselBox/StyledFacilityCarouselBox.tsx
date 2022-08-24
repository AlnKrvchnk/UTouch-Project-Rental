import { styled } from '@mui/material/styles';

export const StyledFacilityCarouselBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: '450px',
    overflow: 'hidden',
    position: 'relative',
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    '.chip': {
        position: 'absolute',
        bottom: '20px',
        left: 24,
        [theme.breakpoints.up('xl')]: {
            left: 195,
        },
    },
    button: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        height: '55px',
        width: '55px',
        minWidth: '55px',
        '>*': { display: 'flex' },
        '&:first-of-type': {
            right: 24,
            [theme.breakpoints.up('xl')]: {
                right: 195,
            },
        },
        '&:last-of-type': {
            left: 24,
            [theme.breakpoints.up('xl')]: {
                left: 195,
            },
        },
    },
}));
