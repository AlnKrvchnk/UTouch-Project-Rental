import { CircularProgress as Circl } from '@mui/material';
import { StyledCircularProgress } from './StyledCircularProgress';
const CircularProgress = () => {
    return (
        <StyledCircularProgress>
            <Circl color={'primary'} />
        </StyledCircularProgress>
    );
};
export default CircularProgress;
