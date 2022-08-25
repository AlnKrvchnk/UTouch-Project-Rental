import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
import FacilityCardControl from '@components/molecules/FacilityCardControls/FacilityCardControls';
import FacilityInform from '@components/molecules/FacilityInform/FacilityInform';
import { StyledFacilityCard } from './StyledFacilityCard';

interface Props {
    title: string;
    isDelivered: boolean;
    registrations: FacilityRegistration[];
    address: string;
    count: string;
    pricePerMeter: string;
    price: string;
    isFavorite: boolean;
    imageUrl: string;
    isCollection: boolean;
    onItemCollection: () => void;
    onItemLike: () => void;
    onItemDetail: () => void;
}

const FacilityCard = ({
    title,
    isDelivered,
    registrations,
    address,
    count,
    pricePerMeter,
    price,
    isFavorite,
    imageUrl,
    isCollection,
    onItemCollection,

    onItemLike,
    onItemDetail,
}: Props) => {
    return (
        <StyledFacilityCard>
            <FacilityInform
                title={title}
                isDelivered={isDelivered}
                registrations={registrations}
                address={address}
                count={count}
                pricePerMeter={pricePerMeter}
                price={price}
                imageUrl={imageUrl}
                onDetail={onItemDetail}
            />
            <FacilityCardControl
                onCollection={onItemCollection}
                onLike={onItemLike}
                isCollection={isCollection}
                isFavorite={isFavorite}
            />
        </StyledFacilityCard>
    );
};
export default FacilityCard;
