import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import { FacilityType } from '@/app/types/Facility/FaculityType';
import FacilityCard from '@/components/organisms/FacilityCard/FacilityCard';
interface Props {
    item: FacilityInfoDto;
    itemLike: (id: string) => void;
    itemCollection: (id: string) => void;
}
const FacilityCardContainer = ({ item, itemLike, itemCollection }: Props) => {
    return (
        <FacilityCard
            id={item.id}
            title={item.name}
            isDelivered={item.isDelivered}
            registrations={item.registrations}
            address={item.address}
            cottageCount={`${item.cottageCount} 
            ${
                (item.facilityType === FacilityType.apartments && 'комнат') ||
                (item.facilityType === FacilityType.cottage && 'домов') ||
                (item.facilityType === FacilityType.new && 'квартир')
            }`}
            pricePerMeter={`от ${item.pricePerMeter} за м²`}
            price={`от ${item.price}руб.`}
            isFavorite={item.isFavourite}
            itemCollection={() => itemCollection(item.id)}
            itemLike={() => {
                itemLike(item.id);
            }}
            image={item.photoNames}
        />
    );
};
export default FacilityCardContainer;
