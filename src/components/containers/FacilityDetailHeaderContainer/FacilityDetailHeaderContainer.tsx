import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityDetailHeader from '@/components/organisms/FacilityDetailHeader/FacilityDetailHeader';
import { useFacilityTypeCount } from '@/hooks/useFacilityTypeCount';
import { useLocaleString } from '@/hooks/useLocaleString';
// eslint-disable-next-line max-len
import PseudoFacilityDetailHeader from '@components/organisms/PseudoFacilityDetailHeader/PseudoFacilityDetailHeader';
interface Props {
    facility?: FacilityInfoDto;
}
const FacilityDetailHeaderContainer = ({ facility }: Props) => {
    const { count, type } = useFacilityTypeCount(facility);
    const priceFormat = useLocaleString(facility?.price);
    const minPriceFormat = useLocaleString(facility?.minPrice);
    const squareFormat = useLocaleString(facility?.square);

    return facility ? (
        <FacilityDetailHeader
            images={facility.photoNames}
            isDelivered={facility.isDelivered}
            price={priceFormat}
            minPrice={minPriceFormat}
            square={squareFormat}
            facilityType={type}
            facilityCount={count || '0'}
            city={facility.city}
            address={facility.address}
            district={facility.district}
            building={facility.building}
            microDistrict={facility.microDistrict}
        />
    ) : (
        <PseudoFacilityDetailHeader />
    );
};
export default FacilityDetailHeaderContainer;
