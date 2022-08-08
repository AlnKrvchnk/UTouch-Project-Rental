import { FacilityInfoDto } from '@Types/Facility/FacilityInfoDto';
import { FacilityMapDto } from '@Types/Facility/FacilityMapDto';
import { GetAllFacilityDto } from '@Types/Facility/GetAllFacilityDto';
import { GetAllMapFacilityDto } from '@Types/Facility/GetAllMapFacilityDto';
import { GetAllPagFacilityDto } from '@Types/Facility/GetAllPagFacilityDto';
import { UpdateFacilityDto } from '@Types/Facility/UpdateFacilityDto';
import { RequestPaginationDto } from '@Types/Pagination/RequestPaginationDto';
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
