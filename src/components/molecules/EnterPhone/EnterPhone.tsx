import TextField from '@components/atoms/TextField/TextField';
import StyledEnterPhone from './StyledEnterPhone';
interface Props {
    handleChange: (value: string) => void;
    value: string;
}
const EnterPhone = ({ handleChange, value }: Props) => {
    return (
        <StyledEnterPhone>
            <TextField
                fullWidth
                dashed
                onChange={(e) => handleChange(e.target.value)}
                value={value}
                variant={'outlined'}
                label={'Введите номер телефона'}
                placeholder={'+7(999) 999-9999'}
                inputProps={{
                    inputMode: 'numeric',
                    maxLength: 20,
                }}
            ></TextField>
        </StyledEnterPhone>
    );
};
export default EnterPhone;
