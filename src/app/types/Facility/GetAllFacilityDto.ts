import { FacilityCategory } from '../Filter/FacilityCategory';
import { ReadFilterDto } from '../Filter/ReadFilterDto';
import { SortBy } from '../Filter/SortBy';
export interface GetAllFacilityDto extends ReadFilterDto {
    sort?: SortBy;
    category?: FacilityCategory;
    searchQuery?: string;
}
