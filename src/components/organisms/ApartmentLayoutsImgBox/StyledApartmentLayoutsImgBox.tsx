import { styled } from '@mui/material/styles';
interface Props {
    show: boolean;
}
export const StyledApartmentLayoutsImgBox = styled('div')<Props>(
    ({ theme, show }) => ({
        display: show ? 'block' : 'none',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.6)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '100',
        '> div': {
            padding: '50px',
            width: '50vw',
            height: '50vw',
            maxWidth: '75vh',
            maxHeight: '75vh',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            '> div': {
                display: 'flex',
                justifyContent: 'space-between',
            },
            '>img': {
                width: '100%',
                height: 'calc( 100% - 75px)',
                objectFit: 'contain',
                marginTop: '24px',
            },
        },
    })
);
