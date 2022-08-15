import { FacilityBenefit } from '@/app/types/Facility/FacilityBenefit';
import { ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import Chip from '@/components/atoms/Chip/Chip';
interface Props {
    items?: ReadFilterDto[];
    removeItem?: (item: ReadFilterDto) => void;
}

const FilterChipsContainer = ({
    items = [{ benefits: [FacilityBenefit.Concierge] }],
    removeItem,
}: Props) => {
    const formatFilter = (item: ReadFilterDto): string => {
        return 'filter';
    };
    return (
        <div>
            {items.map((item) => (
                <Chip
                    label={formatFilter(item)}
                    filter
                    color={'primary'}
                ></Chip>
            ))}
        </div>
    );
};
export default FilterChipsContainer;
