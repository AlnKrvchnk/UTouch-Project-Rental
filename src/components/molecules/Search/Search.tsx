import Button from '@/components/atoms/Button/Button';
import { MapIcon, SearchIcon } from '@/components/atoms/Icons/Icons';
import TextField from '@/components/atoms/TextField/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { StyledSearch } from './StyledSearch';

interface Props {
    value: string;
    setValue: (value: string) => void;
    showMap: () => void;
    placeholder?: string;
    searchValue: () => void;
}

const Search = ({
    placeholder = 'Поиск по объектам',
    value,
    setValue,
    showMap,
    searchValue,
}: Props) => {
    return (
        <StyledSearch>
            <Button variant="outlined" onClick={showMap}>
                <MapIcon />
            </Button>
            <TextField
                variant="outlined"
                placeholder={placeholder}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Button size="large" onClick={searchValue}>
                Поиск
            </Button>
        </StyledSearch>
    );
};
export default Search;
