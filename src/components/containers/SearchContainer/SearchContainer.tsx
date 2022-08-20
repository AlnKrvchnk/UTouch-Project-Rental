import Search from '@/components/molecules/Search/Search';
import { useMemo, useState } from 'react';
interface Props {
    onShowMap: () => void;
    showMap: boolean;
    search: (value: string | undefined) => void;
}
const SearchContainer = ({ onShowMap, showMap, search }: Props) => {
    const [value, setValue] = useState<string>('');

    const isDisabled = useMemo(() => {
        return value.length === 0;
    }, [value]);
    const onSearch = () => {
        !isDisabled ? search(value) : search(undefined);
    };
    return (
        <div>
            <Search
                searchValue={onSearch}
                value={value}
                showMap={showMap}
                onShowMap={onShowMap}
                setValue={setValue}
            />
        </div>
    );
};
export default SearchContainer;
