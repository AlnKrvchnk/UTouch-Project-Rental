import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
//@ts-ignore
import { FacilityMapDto } from '@types/Facility/FacilityMapDto';
//@ts-ignore
import { GetAllFacilityDto } from '@types/Facility/GetAllFacilityDto';
//@ts-ignore
import { GetAllMapFacilityDto } from '@types/Facility/GetAllMapFacilityDto';
//@ts-ignore
import { GetAllPagFacilityDto } from '@types/Facility/GetAllPagFacilityDto';
//@ts-ignore
import { UpdateFacilityDto } from '@types/Facility/UpdateFacilityDto';
//@ts-ignore
import { RequestPaginationDto } from '@types/Pagination/RequestPaginationDto';
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
