import { GetAllFacilityDto } from './GetAllFacilityDto';

export interface GetAllMapFacilityDto extends GetAllFacilityDto {
    topLeftLongitude: number;
    topLeftLatitude: number;
    bottomRightLongitude: number;
    bottomRightLatitude: number;
    address?: string;
}
