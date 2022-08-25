import { FacilityCategory } from '@/app/types/Filter/FacilityCategory';
import TagList from '@/components/molecules/TagList/TagList';
import { useAppContext } from '@/contexts/StoreContext';
import { Paths } from '@/routes/Paths';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    useEffect(() => {
        if (activeTag !== undefined) {
            navigate(`${Paths.Catalog}`, { replace: true });
        }
        store.filter.setCategory(activeTag as FacilityCategory);
    }, [activeTag]);
    return (
        <TagList
            items={items}
            activeItem={activeTag}
            onClick={(item) => {
                item === activeTag
                    ? setActiveTag(undefined)
                    : setActiveTag(item);
            }}
        />
    );
};
export default TagListContainer;
