import { CheckerboardFilterDto } from '../Filter/CheckerboardFilterDto';
import { ReadFilterDto } from '../Filter/ReadFilterDto';
import { FacilityCategory } from './FacilityCategory';
import { FacilitySortBy } from './FacilitySortBy';

export interface GetAllFacilityDto
    extends ReadFilterDto,
        CheckerboardFilterDto {
    sort?: FacilitySortBy;
    category?: FacilityCategory;
}