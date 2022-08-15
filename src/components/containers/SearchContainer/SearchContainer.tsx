import Search from '@/components/molecules/Search/Search';
import { useMemo, useState } from 'react';
interface Props {
    showMap: () => void;
    search: (value: string) => void;
}
const SearchContainer = ({ showMap, search }: Props) => {
    const [value, setValue] = useState<string>('');

    const isDisabled = useMemo(() => {
        return value.length === 0;
    }, [value]);
    const onSearch = () => {
        !isDisabled && search(value);
    };
    return (
        <div>
            <Search
                searchValue={onSearch}
                value={value}
                showMap={showMap}
                setValue={setValue}
            />
        </div>
    );
};
export default SearchContainer;
