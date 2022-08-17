import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityCardContainer from '@/components/containers/FacilityCardContainer/FacilityCardContainer';

interface Props {
    items: FacilityInfoDto[];
    onItemLike: (id: FacilityInfoDto['id']) => void;
}
const FacilityList = ({ items, onItemLike }: Props) => {
    return (
        <>
            {items.map((item) => (
                <FacilityCardContainer
                    key={`${item.id}`}
                    item={item}
                    itemLike={onItemLike}
                />
            ))}
        </>
    );
};
export default FacilityList;
