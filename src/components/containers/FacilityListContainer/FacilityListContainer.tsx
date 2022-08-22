import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityList from '@/components/organisms/FacilityList/FacilityList';
interface Props {
    itemsList: FacilityInfoDto[];
    onItemLike: (id: string) => void;
    onItemCollection: (id: string) => void;
    onItemDetail: (id: string) => void;
}

const FacilityListContainer = ({
    itemsList,
    onItemLike,
    onItemCollection,
    onItemDetail,
}: Props) => {
    return (
        <FacilityList
            items={itemsList}
            onItemLike={onItemLike}
            onItemCollection={onItemCollection}
            onItemDetail={onItemDetail}
        />
    );
};
export default FacilityListContainer;
