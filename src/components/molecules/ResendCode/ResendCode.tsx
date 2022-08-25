import TimerContainer from '@/components/containers/TimerContainer/TimerContainer';
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
                color="primary.main"
                onClick={resendCode}
            >
                Отправить код еще раз
            </Link>
            <TimerContainer
                isWork={isWork}
                timeInterval={300}
                onTimeOver={resendCode}
            ></TimerContainer>
        </StyledResendCode>
    );
};
export default ResendCode;
