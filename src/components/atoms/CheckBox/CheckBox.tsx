import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
const CheckBox = ({ title, onChange }: CheckboxProps) => {
    return (
        <FormControlLabel
            control={<Checkbox color="primary" onChange={onChange} />}
            label={title}
        />
    );
};
export default CheckBox;
