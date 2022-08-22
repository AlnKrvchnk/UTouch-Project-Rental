import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import { FacilityMapDto } from '@/app/types/Facility/FacilityMapDto';
import { GetAllFacilityDto } from '@/app/types/Facility/GetAllFacilityDto';
import { GetAllMapFacilityDto } from '@/app/types/Facility/GetAllMapFacilityDto';
import { GetAllPagFacilityDto } from '@/app/types/Facility/GetAllPagFacilityDto';
import { UpdateFacilityDto } from '@/app/types/Facility/UpdateFacilityDto';
import { RequestPaginationDto } from '@/app/types/Pagination/RequestPaginationDto';
import { facilities } from './endpoints';
import Api from './index';

export default class FacilitiesApi {
    constructor(private readonly api: Api) {}
    public getAll(
        facilityFilter: GetAllFacilityDto
    ): Promise<FacilityInfoDto[]> {
        return this.api.get(facilities.getAll(facilityFilter));
    }
    public getAllPag(
        facilityFilter: GetAllPagFacilityDto
    ): Promise<RequestPaginationDto<FacilityInfoDto>> {
        return this.api.get(facilities.getAllPag(facilityFilter));
    }
    public getAllMap(
        facilityFilter: GetAllMapFacilityDto
    ): Promise<FacilityMapDto> {
        return this.api.get(facilities.getAllMap(facilityFilter));
    }
    public getById(id: string): Promise<FacilityInfoDto> {
        return this.api.get(facilities.getById(id));
    }
    public update(
        id: string,
        facility: UpdateFacilityDto
    ): Promise<FacilityInfoDto> {
        return this.api.patch(facilities.update(id), facility);
    }
    public delete(id: string): Promise<boolean> {
        return this.api.delete(facilities.delete(id));
    }
}
