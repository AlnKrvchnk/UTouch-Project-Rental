import EnterPhone from '@components/molecules/EnterPhone/EnterPhone';
import formatedPhone from '@utilites/formatedPhoneNumber';
import { useEffect, useState } from 'react';

interface Props {
    valueEntered: (value: string) => void;
    setError: (errorMessage: string) => void;
}

const EnterPhoneContainer = ({ valueEntered, setError }: Props) => {
    const [value, setValue] = useState<string>('');
    const regexp = /^(8|\+7)(\(\d{3}\))\s(\d{3})-(\d{4})$/g;

    useEffect(() => {
        setError('');
        if (value.match(regexp)) {
            console.log(value.replace(/[^\d]/g, ''));
            valueEntered(value.replace(/[^\d]/g, ''));
        } else {
            if (value.match(/[^\d-()+\s]/gi)) {
                setValue(value.replace(/[^\d-()+\s]/gi, ''));
            } else {
                try {
                    formatValue();
                } catch (err) {
                    setError((err as Error).message);
                }
            }
        }
    }, [value]);

    const formatValue = () => {
        if (value.length > 0) {
            switch (value[0]) {
                case '+':
                    setValue(formatedPhone(value, '+7(000) 000-0000'));
                    break;
                case '8':
                    setValue(formatedPhone(value, '8(000) 000-0000'));
                    break;
                case '7':
                    console.log('case 7');
                    setValue(formatedPhone(value, '+7(000) 000-0000'));
                    break;
                default:
                    setValue(`+7(${value}`);
            }
        }
    };

    return (
        <EnterPhone value={value} handleChange={(value) => setValue(value)} />
    );
};
export default EnterPhoneContainer;
