import Button from '@/components/atoms/Button/Button';
import { MapIcon, SearchIcon } from '@/components/atoms/Icons/Icons';
import TextField from '@/components/atoms/TextField/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { StyledSearch } from './StyledSearch';

interface Props {
    value: string;
    setValue: (value: string) => void;
    onShowMap: () => void;
    showMap: boolean;
    placeholder?: string;
    searchValue: () => void;
}

const Search = ({
    placeholder = 'Поиск по объектам',
    value,
    setValue,
    showMap,
    onShowMap,
    searchValue,
}: Props) => {
    return (
        <StyledSearch>
            <Button
                onClick={onShowMap}
                variant={showMap ? 'contained' : 'outlined'}
            >
                <MapIcon />
            </Button>
            <TextField
                variant="outlined"
                placeholder={placeholder}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onSubmit={searchValue}
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
