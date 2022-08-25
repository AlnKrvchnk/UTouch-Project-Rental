import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import FilterList from '@/components/organisms/FilterList/FilterList';
import { useAppContext } from '@/contexts/StoreContext';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

const FiltersContainer = () => {
    const store = useAppContext();
    const filter = store.filter.filterList;
    const selectFilter = store.filter.selectFilter;
    // const [userFilter, setFilter] = useState<ReadFilterDto>({});
    // useEffect(() => {
    //     setFilter(toJS(selectFilter));
    // }, [selectFilter]);
    useEffect(() => {
        store.filter.loadFilter();
    }, []);
    const setUserFilter = (filterKey: string, value: string | RangeFilter) => {
        store.filter.setUserFilter(filterKey, value);
    };
    return (
        <FilterList
            filter={toJS(filter) || undefined}
            setFilterValue={(key, value) => setUserFilter(key, value)}
            selectFilter={toJS(selectFilter)}
        />
    );
};
export default observer(FiltersContainer);
