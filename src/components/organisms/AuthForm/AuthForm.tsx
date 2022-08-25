import Button from '@components/atoms/Button/Button';
import Logo from '@components/atoms/Logo/Logo';
import EnterCodeContainer from '@components/containers/EnterCodeContainer/EnterCodeContainer';
import EnterPhoneContainer from '@components/containers/EnterPhoneContainer/EnterPhoneContainer';
import ResendCode from '@components/molecules/ResendCode/ResendCode';
import ErrorBox from '@components/organisms/ErrorBox/ErrorBox';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';
import { StyledAuthForm } from './StyledAuthForm';

interface Props {
    error?: string;
    isCodeDisplay: boolean;
    isTimerWork: boolean;

    setPhone: (value: string) => void;
    setCode: (value: string) => void;
    setError: (value: string) => void;
    onSubmitForm: () => void;
    onResendCode: () => void;
}

const AuthForm = ({
    error,
    isCodeDisplay,
    isTimerWork,
    setPhone,
    setCode,
    onSubmitForm,
    setError,
    onResendCode,
}: Props) => {
    return (
        <div>
            {error && <ErrorBox>{error}</ErrorBox>}
            <StyledAuthForm>
                <Typography align={'center'}>
                    <Logo />
                </Typography>
                <Typography
                    variant={'h1'}
                    color={'text.primary'}
                    align={'center'}
                >
                    Авторизация
                </Typography>
                <Typography
                    variant={'subtitle1'}
                    color={'text.secondary'}
                    align={'center'}
                >
                    Контент Менеджер
                </Typography>
                <EnterPhoneContainer
                    onValueEntered={setPhone}
                    setError={setError}
                />
                {isCodeDisplay && (
                    <EnterCodeContainer onValueEntered={setCode} />
                )}
                <Button
                    fullWidth
                    size={'large'}
                    onClick={onSubmitForm}
                    fw={600}
                    fs={15}
                >
                    Продолжить
                </Button>
                {isCodeDisplay && <hr />}
                {isCodeDisplay && (
                    <ResendCode
                        isWork={isCodeDisplay && isTimerWork}
                        resendCode={onResendCode}
                    ></ResendCode>
                )}
            </StyledAuthForm>
        </div>
    );
};
export default observer(AuthForm);
