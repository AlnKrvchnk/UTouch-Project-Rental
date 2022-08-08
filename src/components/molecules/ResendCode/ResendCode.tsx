import Timer from '@Components/atoms/Timer/Timer';
import Link from '@mui/material/Link';
import { StyledResendCode } from './StyledResendCode';

const ResendCode = () => {
    return (
        <StyledResendCode>
            <Link underline="none" variant="subtitle2" color="text.main">
                Отправить код еще раз
            </Link>
            <Timer
                isWork={false}
                timeInterval={300}
                timeOver={() => {}}
            ></Timer>
        </StyledResendCode>
    );
};
export default ResendCode;
