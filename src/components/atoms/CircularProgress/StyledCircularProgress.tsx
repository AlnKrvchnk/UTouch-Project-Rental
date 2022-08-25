import { styled } from '@mui/material/styles';

export const StyledCircularProgress = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
}));
