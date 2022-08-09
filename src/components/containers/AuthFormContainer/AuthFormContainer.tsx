import { useAppContext } from '@/contexts/StoreContext';
import AuthForm from '@Components/organisms/AuthForm/AuthForm';
import { observer } from 'mobx-react';
import { useState } from 'react';

const AuthFormContainer = () => {
    const store = useAppContext();
    const isPhoneSend = store.auth.isPhoneSend;
    const [phone, setPhone] = useState<string>('');
    const [code, setCode] = useState<string>('1111');

    const submitForm = () => {
        isPhoneSend
            ? store.auth.login({ phone, code })
            : store.auth.getCode({ phone });
    };

    return (
        <AuthForm
            setPhone={(value) => setPhone(value)}
            setCode={(value) => setCode(value)}
            submitForm={submitForm}
        />
    );
};
export default observer(AuthFormContainer);
