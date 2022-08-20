import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import { ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import FilterList from '@/components/organisms/FilterList/FilterList';
import PseudoFilterList from '@/components/organisms/PseudoFilterList/PseudoFilterList';
import { useAppContext } from '@/contexts/StoreContext';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';

const FiltersContainer = () => {
    const store = useAppContext();
    const isLoad = store.filter.isLoad;
    const filter = store.filter.filterList;
    const selectFilter = store.filter.selectFilter;
    const [userFilter, setFilter] = useState<ReadFilterDto>({});
    useEffect(() => {
        console.log(toJS(selectFilter));
        setFilter(toJS(selectFilter));
    }, [selectFilter]);
    useEffect(() => {
        store.filter.loadFilter();
    }, []);
    const setUserFilter = (filterKey: string, value: string | RangeFilter) => {
        store.filter.setUserFilter(filterKey, value);
    };
    return (
        <>
            {isLoad ? (
                <FilterList
                    filter={toJS(filter) || {}}
                    setFilterValue={(key, value) => setUserFilter(key, value)}
                    selectFilter={userFilter}
                />
            ) : (
                <PseudoFilterList />
            )}
        </>
    );
};
export default observer(FiltersContainer);
