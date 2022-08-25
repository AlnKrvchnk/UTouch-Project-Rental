import Button from '@/components/atoms/Button/Button';
import { SearchIcon } from '@/components/atoms/Icons/Icons';
import TextField from '@/components/atoms/TextField/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { StyledSearch } from './StyledSearch';

interface Props {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    onSearchValue: () => void;
}

const Search = ({
    placeholder = 'Поиск по объектам',
    value,
    setValue,
    onSearchValue,
}: Props) => {
    return (
        <StyledSearch>
            <TextField
                variant="outlined"
                placeholder={placeholder}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onSubmit={onSearchValue}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Button size="large" onClick={onSearchValue}>
                Поиск
            </Button>
        </StyledSearch>
    );
};
export default Search;
