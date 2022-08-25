import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import { FacilityType } from '@/app/types/Facility/FaculityType';
export const useFacilityTypeCount = (item: FacilityInfoDto | undefined) => {
    if (item) {
        if (item.facilityType === FacilityType.apartments) {
            return {
                count: item.roomsCount?.toLocaleString(),
                countLabel: 'комнат',
                type: 'Комнаты',
            };
        }
        if (item.facilityType === FacilityType.cottage) {
            return {
                count: item.cottageCount?.toLocaleString(),
                countLabel: 'дома',
                type: 'Домов',
            };
        }
        return {
            count: item.flatsCount.toLocaleString(),
            countLabel: 'квартир',
            type: 'Квартиры',
        };
    }
    return { count: '', countLabel: 'квартир', type: 'Квартиры' };
};
