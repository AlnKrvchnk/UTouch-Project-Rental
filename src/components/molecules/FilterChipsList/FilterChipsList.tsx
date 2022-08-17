import Chip from '@/components/atoms/Chip/Chip';
import { StyledFilterChipsList } from './StyledFilterChipsList';

interface Props {
    items: { key: string; value: string }[];
    removeItems: (key: string) => void;
}

const FilterChipsList = ({ items, removeItems }: Props) => {
    return (
        <StyledFilterChipsList>
            {items.map((item) => (
                <Chip
                    key={`${item.key}-${item.value}`}
                    label={item.value}
                    filter
                    color={'primary'}
                    removeChip={() => removeItems(item.key)}
                ></Chip>
            ))}
        </StyledFilterChipsList>
    );
};
export default FilterChipsList;
