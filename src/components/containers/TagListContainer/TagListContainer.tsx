import { FacilityCategory } from '@/app/types/Filter/FacilityCategory';
import TagList from '@/components/molecules/TagList/TagList';
import { useAppContext } from '@/contexts/StoreContext';
import { useEffect, useState } from 'react';

const TagListContainer = () => {
    const store = useAppContext();
    const [activeTag, setActiveTag] = useState<FacilityCategory | undefined>();
    const items: FacilityCategory[] = [
        FacilityCategory.newbuilding,
        FacilityCategory.village,
        FacilityCategory.flat,
        FacilityCategory.new,
        FacilityCategory.withsales,
        FacilityCategory.popular,
        FacilityCategory.isillegal,
    ];
    useEffect(() => {
        if (activeTag !== undefined) {
            store.filter.setCategory(activeTag as FacilityCategory);
        }
    }, [activeTag]);
    return (
        <TagList
            items={items}
            activeItem={activeTag}
            onClick={(item) => {
                setActiveTag(item);
            }}
        />
    );
};
export default TagListContainer;
