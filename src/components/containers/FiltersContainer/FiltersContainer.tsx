import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import { ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import FilterList from '@/components/organisms/FilterList/FilterList';
import { useAppContext } from '@/contexts/StoreContext';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';

const FiltersContainer = () => {
    const store = useAppContext();
    const isLoad = store.filter.isLoad;
    const filter = toJS(store.filter.filterList);
    const selectFilter = store.filter.selectFilter;
    const [userFilter, setFilter] = useState<ReadFilterDto>({});
    useEffect(() => {
        console.log(selectFilter);

        setFilter(toJS(selectFilter));
    }, [selectFilter]);
    useEffect(() => {
        store.filter.loadFilter();
    }, []);
    const setUserFilter = (filterKey: string, value: string | RangeFilter) => {
        store.filter.setSelectFilter(filterKey, value);
    };
    return (
        <FilterList
            items={filter}
            setFilterItem={(key, value) => {
                setUserFilter(key, value);
            }}
            selectFilter={userFilter}
        />
    );
};
export default observer(FiltersContainer);
