import { styled } from '@mui/material/styles';

export const StyledDeveloperInformSmallCard = styled('div')(({ theme }) => ({
    '.imgContainer': {
        margin: 'auto',
        marginBottom: '20px',
        overflow: 'hidden',
        borderRadius: '50%',
        width: '100%',
        aspectRatio: '1 / 1',
        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: ' 0 0',
        },
    },
}));
