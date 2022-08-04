export interface GetAllMapFacilityDto {
    topLeftLongitude: number;
    topLeftLatitude: number;
    bottomRightLongitude: number;
    bottomRightLatitude: number;
    address?: string;
}
