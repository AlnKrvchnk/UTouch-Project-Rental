import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityCardContainer from '@/components/containers/FacilityCardContainer/FacilityCardContainer';

interface Props {
    items: FacilityInfoDto[];
    onItemLike: (id: FacilityInfoDto['id']) => void;
}
const FacilityList = ({ items, onItemLike }: Props) => {
    return (
        <div>
            {items.map((item) => (
                <FacilityCardContainer item={item} itemLike={onItemLike} />
            ))}
        </div>
    );
};
export default FacilityList;
