import { FilterTitle } from '@/app/types/Filter/ReadFilterDto';
import FilterChipsList from '@/components/molecules/FilterChipsList/FilterChipsList';
import { useAppContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';

const FilterChipsContainer = () => {
    const store = useAppContext();
    const items = store.filter.selectFilter;
    const [formatItems, setFormatItems] = useState<
        { key: string; value: string }[]
    >([]);
    useEffect(() => {
        const tmp = [];
        for (const key in items) {
            //@ts-ignore
            if (items[key] !== undefined) {
                //@ts-ignore
                items[key] instanceof Array
                    ? tmp.push({
                          key: key,
                          //@ts-ignore
                          value: `${FilterTitle[key]}: ${items[key].join(
                              ', '
                          )}`,
                      })
                    : tmp.push({
                          key: key,
                          value:
                              //@ts-ignore
                              `${FilterTitle[key]}: от ${items[key].min} до ${items[key].max}`,
                      });
            }
        }
        setFormatItems(tmp);
    }, [items]);

    const removeItems = (key: string) => {
        console.log(key);
        store.filter.removeFilter(key);
    };
    return <FilterChipsList items={formatItems} removeItems={removeItems} />;
};
export default observer(FilterChipsContainer);
