import EnterPhone from '@Components/molecules/EnterPhone/EnterPhone';
import { useEffect, useState } from 'react';
import { Validator } from 'validator.ts/Validator';

interface Props {
    enterValue: (value: string) => void;
}

const EnterPhoneContainer = ({ enterValue }: Props) => {
    const [value, setValues] = useState<string>('');
    const validator = new Validator();

    useEffect(() => {
        // isvalid
        if (value === '71231231212') {
            console.log(value);
            enterValue(value);
        }
    }, [value]);

    return (
        <EnterPhone
            value={value}
            textFieldChange={(inputValue) => setValues(inputValue)}
        />
    );
};
export default EnterPhoneContainer;
