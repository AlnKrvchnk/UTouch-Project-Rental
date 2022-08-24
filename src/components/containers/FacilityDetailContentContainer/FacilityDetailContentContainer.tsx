import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityDetailContent from '@/components/organisms/FacilityDetailContent/FacilityDetailContent';
interface Props {
    facility?: FacilityInfoDto;
    onItemlike: () => void;
}
const FacilityDetailContentContainer = ({ facility, onItemlike }: Props) => {
    return <FacilityDetailContent item={facility} onItemLike={onItemlike} />;
};
export default FacilityDetailContentContainer;
