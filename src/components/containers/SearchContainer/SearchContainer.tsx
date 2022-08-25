import Search from '@/components/molecules/Search/Search';
import { useMemo, useState } from 'react';
interface Props {
    onSearch: (value: string | undefined) => void;
}
const SearchContainer = ({ onSearch }: Props) => {
    const [value, setValue] = useState<string>('');

    const isDisabled = useMemo(() => {
        return value.length === 0;
    }, [value]);
    const onSearchValue = () => {
        !isDisabled ? onSearch(value) : onSearch(undefined);
    };
    return (
        <Search
            onSearchValue={onSearchValue}
            value={value}
            setValue={setValue}
        />
    );
};
export default SearchContainer;
