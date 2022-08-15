import {
    filterList,
    FilterTitle,
    ReadFilterDto,
} from '@/app/types/Filter/ReadFilterDto';
import FilterList from '@/components/organisms/FilterList/FilterList';
import { useEffect, useState } from 'react';

const FiltersContainer = () => {
    const [filter, setFilter] = useState<
        { title: FilterTitle; content: ReadFilterDto }[]
    >([]);
    useEffect(() => {
        const tmp = [];
        for (const k in filterList) {
            //@ts-ignore
            const t = FilterTitle[k];
            //@ts-ignore
            const c = filterList[k];
            tmp.push({ title: t, content: c });
        }
        setFilter(tmp);
    }, []);
    return <FilterList items={filter} setItems={() => {}} />;
};
export default FiltersContainer;
