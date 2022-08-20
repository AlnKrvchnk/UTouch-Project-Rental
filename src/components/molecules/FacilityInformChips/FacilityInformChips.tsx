import Chip from '@/components/atoms/Chip/Chip';
import { StyledFacilityChips } from './StyledFacilityChips';

interface Props {
    isDelivered: boolean;
    registrations: string[];
}
const FacilityInformChips = ({ isDelivered, registrations }: Props) => {
    return (
        <StyledFacilityChips>
            {isDelivered && <Chip color={'info'} label={'Сдан'} />}
            {registrations.map((item) => (
                <Chip color={'primary'} label={item} />
            ))}
        </StyledFacilityChips>
    );
};

export default FacilityInformChips;
