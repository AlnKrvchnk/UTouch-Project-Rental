import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityCard from '@/components/organisms/FacilityCard/FacilityCard';
interface Props {
    item: FacilityInfoDto;
    itemLike: (id: FacilityInfoDto['id']) => void;
}
const FacilityCardContainer = ({ item, itemLike }: Props) => {
    const handleCollection = () => {};

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
            itemLike={() => {
                itemLike(item.id);
            }}
        />
    );
};
export default FacilityCardContainer;
