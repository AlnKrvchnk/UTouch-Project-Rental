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
    timerIsWork: boolean;

    setPhone: (value: string) => void;
    setCode: (value: string) => void;
    setError: (value: string) => void;
    submitForm: () => void;
    resendCode: () => void;
}

const AuthForm = ({
    error,
    isCodeDisplay,
    timerIsWork,
    setPhone,
    setCode,
    submitForm,
    setError,
    resendCode,
}: Props) => {
    return (
        <div>
            {error && <ErrorBox>{error}</ErrorBox>}
            <StyledAuthForm onSubmit={submitForm}>
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
                    valueEntered={(value) => setPhone(value)}
                    setError={(value) => setError(value)}
                />
                {isCodeDisplay && (
                    <EnterCodeContainer
                        valueEntered={(value) => setCode(value)}
                    />
                )}
                <Button
                    fullWidth
                    size={'large'}
                    onClick={submitForm}
                    fw={600}
                    fs={15}
                >
                    Продолжить
                </Button>
                {isCodeDisplay && <hr />}
                {isCodeDisplay && (
                    <ResendCode
                        isWork={isCodeDisplay && timerIsWork}
                        resendCode={resendCode}
                    ></ResendCode>
                )}
            </StyledAuthForm>
        </div>
    );
};
export default observer(AuthForm);
