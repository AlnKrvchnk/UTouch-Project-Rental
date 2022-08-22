import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
import FacilityCardControl from '@components/molecules/FacilityCardControls/FacilityCardControls';
import FacilityInform from '@components/molecules/FacilityInform/FacilityInform';
import { StyledFacilityCard } from './StyledFacilityCard';

interface Props {
    id: string;
    title: string;
    isDelivered: boolean;
    registrations: FacilityRegistration[];
    address: string;
    cottageCount: string;
    pricePerMeter: string;
    price: string;
    isFavorite: boolean;
    image: string[];
    itemCollection: () => void;
    itemLike: () => void;
    itemDetail: () => void;
}

const FacilityCard = ({
    id,
    title,
    isDelivered,
    registrations,
    address,
    cottageCount,
    pricePerMeter,
    price,
    isFavorite,
    image,
    itemCollection,
    itemLike,
    itemDetail,
}: Props) => {
    return (
        <StyledFacilityCard>
            <FacilityInform
                id={id}
                title={title}
                isDelivered={isDelivered}
                registrations={registrations}
                address={address}
                cottageCount={cottageCount}
                pricePerMeter={pricePerMeter}
                price={price}
                image={image}
                onDetail={itemDetail}
            />
            <FacilityCardControl
                onCollection={itemCollection}
                onLike={itemLike}
                isCollection={false}
                isFavorite={isFavorite}
            />
        </StyledFacilityCard>
    );
};
export default FacilityCard;
