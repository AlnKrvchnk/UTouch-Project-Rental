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
    const [isTimerWork, setTimerWork] = useState<boolean>(isPhoneSend);
    const [error, setError] = useState<string | undefined>('');

    useEffect(() => {
        setError(storeError);
    }, [storeError]);
    const onSubmitForm = () => {
        isPhoneSend
            ? store.auth.login({ phone, code })
            : store.auth.getCode({ phone });
    };
    const onResendCode = () => {
        setTimerWork(false);
        store.auth.getCode({ phone }).then(() => setTimerWork(true));
    };

    return (
        <AuthForm
            error={error}
            setPhone={(value) => setPhone(value)}
            setCode={(value) => setCode(value)}
            onSubmitForm={onSubmitForm}
            setError={(value) => setError(value)}
            isCodeDisplay={isPhoneSend}
            isTimerWork={isTimerWork}
            onResendCode={onResendCode}
        />
    );
};
export default observer(AuthFormContainer);
