import Timer from '@components/atoms/Timer/Timer';
import Link from '@mui/material/Link';
import { StyledResendCode } from './StyledResendCode';
interface Props {
    isWork: boolean;
    resendCode: () => void;
}
const ResendCode = ({ isWork, resendCode }: Props) => {
    return (
        <StyledResendCode>
            <Link
                underline="none"
                variant="h6"
                color="primary"
                onClick={resendCode}
                href="#!"
            >
                Отправить код еще раз
            </Link>
            <Timer
                isWork={isWork}
                timeInterval={300}
                timeOver={resendCode}
            ></Timer>
        </StyledResendCode>
    );
};
export default ResendCode;
