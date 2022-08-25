import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
export interface FavouriteInfoDto {
    id: number;
    userId: number;
    facility: FacilityInfoDto;
}
