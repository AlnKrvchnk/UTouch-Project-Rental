import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityCard from '@/components/organisms/FacilityCard/FacilityCard';
import { useNavigate } from 'react-router-dom';
interface Props {
    item: FacilityInfoDto;
    itemLike: (id: FacilityInfoDto['id']) => void;
}
const FacilityCardContainer = ({ item, itemLike }: Props) => {
    const navigate = useNavigate();
    const handleCollection = () => {
        console.log(`/${item.id}`);
        navigate(`/${item.id}`, { replace: true });
    };
    const onItemLike = () => {
        itemLike(item.id);
    };

    return (
        <FacilityCard
            id={item.id}
            title={item.name}
            isDelivered={item.isDelivered}
            registrations={item.registrations}
            address={item.address}
            cottageCount={`${item.cottageCount} квартир`}
            pricePerMeter={`от ${item.pricePerMeter} за м²`}
            price={`от ${item.price}руб.`}
            isFavorite={item.isFavourite}
            itemCollection={handleCollection}
            itemLike={onItemLike}
        />
    );
};
export default FacilityCardContainer;
