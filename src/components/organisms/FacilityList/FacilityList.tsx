import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityCardContainer from '@/components/containers/FacilityCardContainer/FacilityCardContainer';
import PseudoFacilityCard from '../PseudoFacilityCard/PseudoFacilityCard';

interface Props {
    items?: FacilityInfoDto[];
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
    return items ? (
        <>
            {items.map((item) => (
                <FacilityCardContainer
                    key={`${item.id}`}
                    item={item}
                    onItemLike={onItemLike}
                    onItemCollection={onItemCollection}
                    onItemDetail={onItemDetail}
                />
            ))}
        </>
    ) : (
        <>
            <PseudoFacilityCard />
            <PseudoFacilityCard />
            <PseudoFacilityCard />
            <PseudoFacilityCard />
        </>
    );
};
export default FacilityList;
