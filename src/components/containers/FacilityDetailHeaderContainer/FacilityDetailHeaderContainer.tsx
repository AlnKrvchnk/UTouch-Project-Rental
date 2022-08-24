import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import { FacilityType } from '@/app/types/Facility/FaculityType';
import FacilityDetailHeader from '@/components/organisms/FacilityDetailHeader/FacilityDetailHeader';
interface Props {
    facility?: FacilityInfoDto;
}
const FacilityDetailHeaderContainer = ({ facility }: Props) => {
    return (
        <FacilityDetailHeader
            images={facility ? facility.photoNames : []}
            isDelivered={facility ? facility.isDelivered : false}
            price={facility ? facility.price.toLocaleString() : 'Не известно'}
            minPrice={
                facility ? facility.minPrice.toLocaleString() : 'Не известно'
            }
            square={facility ? facility.square.toLocaleString() : 'Не известно'}
            facilityType={
                facility
                    ? (facility.facilityType === FacilityType.apartments &&
                          'Комнаты') ||
                      (facility.facilityType === FacilityType.cottage &&
                          'Дома') ||
                      (facility.facilityType === FacilityType.new &&
                          'Квартиры') ||
                      'Не известно'
                    : 'Не известно'
            }
            facilityCount={
                facility
                    ? (facility.facilityType === FacilityType.apartments &&
                          `${facility.roomsCount}`) ||
                      (facility.facilityType === FacilityType.cottage &&
                          `${facility.cottageCount}`) ||
                      (facility.facilityType === FacilityType.new &&
                          `${facility.flatsCount}`) ||
                      'Не известно'
                    : 'Не известно'
            }
            city={facility ? facility.city : 'Не известно'}
            address={facility ? facility.address : 'Не известно'}
            district={facility ? facility.district : 'Не известно'}
            building={facility ? facility.building : 'Не известно'}
            microDistrict={facility ? facility.microDistrict : 'Не известно'}
        />
    );
};
export default FacilityDetailHeaderContainer;
