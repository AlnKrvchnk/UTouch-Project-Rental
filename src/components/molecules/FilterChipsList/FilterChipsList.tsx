import Chip from '@/components/atoms/Chip/Chip';
import { StyledFilterChipsList } from './StyledFilterChipsList';

export interface Item {
    title: string;
    value: string;
}

interface Props {
    items: Array<Item>;
    onRemoveItems: (title: string) => void;
}

const FilterChipsList = ({ items, onRemoveItems }: Props) => {
    return (
        <StyledFilterChipsList>
            {items.map((item) => (
                <Chip
                    key={`${item.title}`}
                    label={`${item.title}: ${item.value}`}
                    isFilter
                    color={'primary'}
                    removeChip={() => onRemoveItems(item.title)}
                ></Chip>
            ))}
        </StyledFilterChipsList>
    );
};
export default FilterChipsList;
