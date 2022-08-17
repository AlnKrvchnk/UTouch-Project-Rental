import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
import Button from '@/components/atoms/Button/Button';
import {
    CollectionsIcon,
    LikeIcon,
    SolidLikeIcon,
} from '@components/atoms/Icons/Icons';
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
    itemCollection: () => void;
    itemLike: () => void;
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
    itemCollection,
    itemLike,
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
            />
            <div className="controls">
                <Button
                    variant={'outlined'}
                    color={'primary'}
                    radius={8}
                    size={'large'}
                    onClick={itemCollection}
                >
                    <CollectionsIcon />
                </Button>
                <Button
                    variant={'outlined'}
                    color={'primary'}
                    radius={8}
                    size={'large'}
                    onClick={itemLike}
                >
                    {isFavorite ? <SolidLikeIcon /> : <LikeIcon />}
                </Button>
            </div>
        </StyledFacilityCard>
    );
};
export default FacilityCard;
