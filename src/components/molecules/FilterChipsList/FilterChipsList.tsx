import Chip from '@/components/atoms/Chip/Chip';
import { StyledFilterChipsList } from './StyledFilterChipsList';

interface Props {
    items: { title: string; value: string }[];
    removeItems: (title: string) => void;
}

const FilterChipsList = ({ items, removeItems }: Props) => {
    return (
        <StyledFilterChipsList>
            {items.map((item) => (
                <Chip
                    key={`${item.title}`}
                    label={`${item.title}: ${item.value}`}
                    filter
                    color={'primary'}
                    removeChip={() => removeItems(item.title)}
                ></Chip>
            ))}
        </StyledFilterChipsList>
    );
};
export default FilterChipsList;
