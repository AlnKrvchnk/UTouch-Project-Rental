import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityCard from '@/components/organisms/FacilityCard/FacilityCard';
import { useFacilityTypeCount } from '@/hooks/useFacilityTypeCount';
import { useLocaleString } from '@/hooks/useLocaleString';
interface Props {
    item: FacilityInfoDto;
    onItemLike: (id: string) => void;
    onItemCollection: (id: string) => void;
    onItemDetail: (id: string) => void;
}
const FacilityCardContainer = ({
    item,
    onItemLike,
    onItemCollection,
    onItemDetail,
}: Props) => {
    const { count, countLabel } = useFacilityTypeCount(item);
    const pricePerMeterFormat = useLocaleString(item.pricePerMeter);
    const priceFormat = useLocaleString(item.price);
    return (
        <FacilityCard
            title={item.name}
            isDelivered={item.isDelivered}
            registrations={item.registrations}
            address={item.address}
            count={`${count}  ${countLabel}`}
            pricePerMeter={`от ${pricePerMeterFormat} за м²`}
            price={`от ${priceFormat}руб.`}
            isFavorite={item.isFavourite}
            onItemCollection={() => onItemCollection(item.id)}
            onItemLike={() => {
                onItemLike(item.id);
            }}
            imageUrl={item.photoNames[0]}
            onItemDetail={() => onItemDetail(item.id)}
            isCollection={false}
        />
    );
};
export default FacilityCardContainer;
