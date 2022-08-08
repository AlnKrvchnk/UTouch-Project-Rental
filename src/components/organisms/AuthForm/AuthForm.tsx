import ResendCode from '@/components/molecules/ResendCode/ResendCode';
import Button from '@Components/atoms/Button/Button';
import Logo from '@Components/atoms/Logo/Logo';
import TextField from '@Components/atoms/TextField/TextField';
import Typography from '@mui/material/Typography';
import { StyledAuthForm } from './StyledAuthForm';

interface Props {
    textFieldChange: () => void;
    submitForm: () => void;
}

const AuthForm = ({ textFieldChange, submitForm }: Props) => {
    return (
        <StyledAuthForm onSubmit={submitForm}>
            <Logo />
            <Typography variant={'h1'} color={'primary'}>
                Авторизация
            </Typography>
            <Typography variant={'subtitle1'} color={'secondary'}>Контент Менеджер</Typography>
            <TextField
                fullWidth
                dashed
                onChange={textFieldChange}
                variant={'outlined'}
                label={'Введите номер телефона'}
                placeholder={'+7(999) 999-9999'}
            ></TextField>
            <Button fullWidth onClick={submitForm} fw={600} fs={15}>
                Продолжить
            </Button>
            <hr />
            <ResendCode></ResendCode>
        </StyledAuthForm>
    );
};
export default AuthForm;
