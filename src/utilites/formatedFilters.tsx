import { GetAllFacilityDto } from '@/app/types/Facility/GetAllFacilityDto';
import { GetAllMapFacilityDto } from '@/app/types/Facility/GetAllMapFacilityDto';
import { GetAllPagFacilityDto } from '@/app/types/Facility/GetAllPagFacilityDto';
import { DeliveryDateDto } from '@/app/types/Filter/DeliveryDateDto';
import { toJS } from 'mobx';

function formatedFilters(
    facilityFilter:
        | GetAllFacilityDto
        | GetAllPagFacilityDto
        | GetAllMapFacilityDto
) {
    const param = Object.entries(facilityFilter).map(([key, value]) => {
        if (key === 'deliveryDates') {
            const tmp: string[] = toJS(value).map(
                (item: DeliveryDateDto) => `${item.year}-${item.quarter}`
            );
            return `${key}=${tmp.join(',')}`;
        } else if (
            key === 'price' ||
            key === 'pricePerMeter' ||
            key === 'square' ||
            key === 'deliveryDate' ||
            key === 'distanceToTheBeach'
        ) {
            return `${key}Gte=${value.min}&${key}Lt=${value.max}`;
        }
        return `${key}=${value}`;
    });
    console.log(param);
    return param.length === 0 ? '' : `?${param.join('&')}`;
}
export default formatedFilters;
