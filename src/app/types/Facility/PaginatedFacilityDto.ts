import { FacilityInfoDto } from './FacilityInfoDto';

export interface PaginatedFacilityDto {
    data: [FacilityInfoDto];
    page: number;
    limit: number;
    total: number;
}
