import TextField from '@Components/atoms/TextField/TextField';
import StyledEnterPhone from './StyledEnterPhone';
interface Props {
    textFieldChange: (value: string) => void;
    value: string;
}
const EnterPhone = ({ textFieldChange, value }: Props) => {
    return (
        <StyledEnterPhone>
            <TextField
                fullWidth
                dashed
                onChange={(e) => textFieldChange(e.target.value)}
                value={value}
                variant={'outlined'}
                label={'Введите номер телефона'}
                placeholder={'+7(999) 999-9999'}
                inputProps={{
                    inputMode: 'numeric',
                }}
            ></TextField>
        </StyledEnterPhone>
    );
};
export default EnterPhone;
