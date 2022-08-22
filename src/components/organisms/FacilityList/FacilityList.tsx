import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityCardContainer from '@/components/containers/FacilityCardContainer/FacilityCardContainer';

interface Props {
    items: FacilityInfoDto[];
    onItemLike: (id: string) => void;
    onItemCollection: (id: string) => void;
    onItemDetail: (id: string) => void;
}
const FacilityList = ({
    items,
    onItemLike,
    onItemCollection,
    onItemDetail,
}: Props) => {
    return (
        <>
            {items.map((item) => (
                <FacilityCardContainer
                    key={`${item.id}`}
                    item={item}
                    itemLike={onItemLike}
                    itemCollection={onItemCollection}
                    itemDetail={onItemDetail}
                />
            ))}
        </>
    );
};
export default FacilityList;
