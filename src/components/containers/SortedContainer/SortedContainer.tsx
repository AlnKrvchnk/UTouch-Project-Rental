import { SortBy } from '@/app/types/Filter/SortBy';
import Select from '@/components/atoms/Select/Select';
import { useAppContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';

const SortedContainer = () => {
    const store = useAppContext();
    const [selectItem, setSelectItem] = useState<string | undefined>();
    useEffect(() => {
        store.filter.setSortBy(selectItem);
    }, [selectItem]);
    return (
        <Select
            items={Object.values(SortBy)}
            selectItem={selectItem}
            title={'Сортировка'}
            setSelectItem={setSelectItem}
        />
    );
};
export default observer(SortedContainer);
