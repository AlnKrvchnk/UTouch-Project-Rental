import EnterCode from '@/components/molecules/EnterCode/EnterCode';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

interface Props {
    enterValue: (code: string) => void;
}

const EnterCodeContainer = ({ enterValue }: Props) => {
    const refs: HTMLInputElement[] = [];
    const [values, setValues] = useState<string[]>(new Array(4).fill(''));

    useEffect(() => {
        for (let i = refs.length - 1; i > 0; i--) {
            if (values[i] === '' && values[i - 1] === '') {
                refs[i].disabled = true;
                refs[i - 1].focus();
            }
        }
    }, [refs]);

    const keyDown = (
        i: number,
        e: KeyboardEvent<HTMLInputElement | HTMLDivElement>
    ) => {
        const key: string = e.key;
        if (key === 'Backspace' || key === 'Delete') {
            if (values[i] !== '') {
                const tmp = [...values];
                tmp[i] = '';
                setValues(tmp);
            } else if (i !== 0) {
                refs[i - 1].focus();
            }
        } else if (/^\d+$/.test(key)) {
            const tmp = [...values];
            tmp[i] = '';
            setValues(tmp);
        } else if (key === 'ArrowLeft') {
            refs[i - 1].focus();
        } else if (key === 'ArrowRight') {
            refs[i + 1].focus();
        }
    };

    const change = (
        i: number,
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value: string = e.target.value;
        if (value.length > 0 && i < refs.length) {
            const tmp = [...values];
            tmp[i] = value;
            setValues(tmp);
            if (i !== refs.length - 1) {
                refs[i + 1].disabled = false;
                refs[i + 1].focus();
            } else if (i === refs.length - 1) {
                enterValue(values.join(''));
            }
        }
    };

    return (
        <EnterCode
            handleKeyDown={(i, e) => keyDown(i, e)}
            handleChange={(i, e) => change(i, e)}
            refs={refs}
            values={values}
        />
    );
};
export default EnterCodeContainer;
