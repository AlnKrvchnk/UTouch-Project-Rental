import { GetAllFacilityDto } from './GetAllFacilityDto';

export interface GetAllPagFacilityDto extends GetAllFacilityDto {
    ownerId: number;
    searchQuery?: string;
    developerId?: number;
}
