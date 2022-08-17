import { GetAllFacilityDto } from '@/app/types/Facility/GetAllFacilityDto';
import { GetAllMapFacilityDto } from '@/app/types/Facility/GetAllMapFacilityDto';
import { GetAllPagFacilityDto } from '@/app/types/Facility/GetAllPagFacilityDto';

function formatedFilters(
    facilityFilter:
        | GetAllFacilityDto
        | GetAllPagFacilityDto
        | GetAllMapFacilityDto
) {
    console.log(facilityFilter);
    const param = Object.entries(facilityFilter).map(([key, value]) => {
        if (
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
    return param.length === 0 ? '' : `?${param.join('&')}`;
}
export default formatedFilters;
