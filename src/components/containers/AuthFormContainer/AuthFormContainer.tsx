import { useAppContext } from '@/contexts/StoreContext';
import AuthForm from '@components/organisms/AuthForm/AuthForm';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';

const AuthFormContainer = () => {
    const store = useAppContext();
    const isPhoneSend = store.auth.isPhoneSend;
    const storeError = store.auth.error;
    const [phone, setPhone] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [timerIsWork, setTimerWork] = useState<boolean>(isPhoneSend);
    const [error, setError] = useState<string | undefined>('');

    useEffect(() => {
        setError(storeError);
    }, [storeError]);
    const submitForm = () => {
        isPhoneSend
            ? store.auth.login({ phone, code })
            : store.auth.getCode({ phone });
    };
    const resendCode = () => {
        setTimerWork(false);
        console.log(timerIsWork);
        console.log('resendCode');
        setTimerWork(true);
        console.log(timerIsWork);
    };

    return (
        <AuthForm
            error={error}
            setPhone={(value) => setPhone(value)}
            setCode={(value) => setCode(value)}
            submitForm={submitForm}
            setError={(value) => setError(value)}
            isCodeDisplay={isPhoneSend}
            timerIsWork={timerIsWork}
            resendCode={resendCode}
        />
    );
};
export default observer(AuthFormContainer);
