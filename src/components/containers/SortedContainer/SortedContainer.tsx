import { FacilitySortBy } from '@/app/types/Facility/FacilitySortBy';
import Select from '@/components/atoms/Select/Select';
import { useState } from 'react';

const SortedContainer = () => {
    const [selectItem, setSelectItem] = useState<string | undefined>();
    return (
        <Select
            items={Object.values(FacilitySortBy)}
            selectItem={selectItem}
            title={'Сортировка'}
            setSelectItem={setSelectItem}
        />
    );
};
export default SortedContainer;
