import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityDetailContent from '@/components/organisms/FacilityDetailContent/FacilityDetailContent';
interface Props {
    facility?: FacilityInfoDto;
    onItemlike: () => void;
    onItemCollection: () => void;
}
const FacilityDetailContentContainer = ({
    facility,
    onItemlike,
    onItemCollection,
}: Props) => {
    return (
        <FacilityDetailContent
            item={facility}
            onItemLike={onItemlike}
            onItemCollection={onItemCollection}
        />
    );
};
export default FacilityDetailContentContainer;
