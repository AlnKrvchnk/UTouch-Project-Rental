import TextField from '@components/atoms/TextField/TextField';
import Typography from '@mui/material/Typography';
import { ChangeEvent, KeyboardEvent } from 'react';
import StyledEnterBlock from './StyledEnterCode';

interface Props {
    handleKeyDown: (
        i: number,
        e: KeyboardEvent<HTMLInputElement | HTMLDivElement>
    ) => void;
    handleChange: (
        i: number,
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    refs: HTMLInputElement[];
    values: string[];
}

const EnterCode = ({ handleKeyDown, handleChange, refs, values }: Props) => {
    return (
        <div>
            <Typography variant="h6" color={'text.primary'}>
                Введите код подтверждения
            </Typography>
            <StyledEnterBlock>
                {values.map((n, i) => (
                    <TextField
                        key={i}
                        placeholder={'0'}
                        variant={'outlined'}
                        type={'number'}
                        inputProps={{
                            inputMode: 'numeric',
                        }}
                        value={values[i]}
                        inputRef={(ref) => (refs[i] = ref)}
                        onChange={(e) => handleChange(i, e)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                    />
                ))}
            </StyledEnterBlock>
        </div>
    );
};

export default EnterCode;
