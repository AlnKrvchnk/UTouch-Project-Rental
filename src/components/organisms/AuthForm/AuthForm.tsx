import ResendCode from '@/components/molecules/ResendCode/ResendCode';
import { useAppContext } from '@/contexts/StoreContext';
import Button from '@Components/atoms/Button/Button';
import Logo from '@Components/atoms/Logo/Logo';
import EnterCodeContainer from '@Components/containers/EnterCodeContainer/EnterCodeContainer';
import EnterPhoneContainer from '@Components/containers/EnterPhoneContainer/EnterPhoneContainer';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';
import { StyledAuthForm } from './StyledAuthForm';

interface Props {
    setPhone: (value: string) => void;
    setCode: (value: string) => void;
    submitForm: () => void;
}

const AuthForm = ({ setPhone, setCode, submitForm }: Props) => {
    const store = useAppContext();
    const isPhoneSend = store.auth.isPhoneSend;

    return (
        <StyledAuthForm onSubmit={submitForm}>
            <Logo />
            <Typography variant={'h1'} color={'text.primary'} align={'center'}>
                Авторизация
            </Typography>
            <Typography
                variant={'subtitle1'}
                color={'text.secondary'}
                align={'center'}
            >
                Контент Менеджер
            </Typography>
            <EnterPhoneContainer enterValue={(value) => setPhone(value)} />
            {isPhoneSend ? (
                <EnterCodeContainer enterValue={(value) => setCode(value)} />
            ) : (
                <></>
            )}
            <Button fullWidth onClick={submitForm} fw={600} fs={15}>
                Продолжить
            </Button>
            {isPhoneSend ? <hr /> : <></>}
            {isPhoneSend ? <ResendCode></ResendCode> : <></>}
        </StyledAuthForm>
    );
};
export default observer(AuthForm);
