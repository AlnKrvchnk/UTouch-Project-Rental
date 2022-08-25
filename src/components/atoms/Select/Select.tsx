import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { StyledSelect } from './StyledSelect';
interface Props {
    items: string[];
    selectItem: string | undefined;
    title: string;
    setSelectItem: (item: string) => void;
}
const Select = ({ selectItem, items, title, setSelectItem }: Props) => {
    return (
        <FormControl fullWidth color={'primary'}>
            <InputLabel id="select-label">{title}</InputLabel>
            <StyledSelect
                labelId="select-label"
                id="select"
                value={selectItem}
                label={title}
                onChange={(event) =>
                    setSelectItem(event.target.value as string)
                }
                sx={{ background: 'white' }}
            >
                {items.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                ))}
            </StyledSelect>
        </FormControl>
    );
};
export default Select;
