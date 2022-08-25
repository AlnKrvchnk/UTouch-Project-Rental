import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
const CheckBox = ({ title, onChange, checked }: CheckboxProps) => {
    return (
        <FormControlLabel
            sx={{ display: 'block' }}
            control={<Checkbox color="primary" onChange={onChange} />}
            label={title}
            checked={checked}
        />
    );
};
export default CheckBox;
