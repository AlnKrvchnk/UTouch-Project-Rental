import { FacilityCategory } from '@/app/types/Filter/FacilityCategory';
import Tag from '@/components/atoms/Tag/Tag';
import { StyledTagList } from './StyledTagList';

interface Props {
    items: FacilityCategory[];
    activeItem: FacilityCategory | undefined;
    onClick: (title: FacilityCategory) => void;
}

const TagList = ({ items, onClick, activeItem }: Props) => {
    return (
        <StyledTagList>
            {items.map((item) => (
                <Tag
                    key={`Tag:${item}`}
                    onClick={() => {
                        onClick(item);
                    }}
                    isActive={item === activeItem}
                >
                    {item}
                </Tag>
            ))}
        </StyledTagList>
    );
};
export default TagList;
