import { FacilityCategory } from '@/app/types/Facility/FacilityCategory';
import TagList from '@/components/molecules/TagList/TagList';
import { useEffect, useState } from 'react';

const TagListContainer = () => {
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
            for (let item in FacilityCategory) {
                //@ts-ignore
                if (FacilityCategory[item] === activeTag) console.log(item);
            }
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
