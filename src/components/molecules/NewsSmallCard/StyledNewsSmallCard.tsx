import { styled } from '@mui/material/styles';
interface Props {
    backgroundImage: string;
}
export const StyledNewsSmallCard = styled('div')<Props>(
    ({ theme, backgroundImage }) => ({
        width: '100%',
        cursor: 'pointer',
        height: '232px',
        minWidth: '159px',
        // eslint-disable-next-line max-len
        background: `linear-gradient(180deg, rgba(50, 54, 67, 0) 0%, rgba(50, 54, 67, 0.75) 100%), url(${backgroundImage})`,
        display: 'flex',
        alignItems: 'flex-end',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10px',
    })
);
