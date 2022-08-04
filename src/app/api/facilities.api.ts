import { CreateFacilityDto } from '../types/Facility/CreateFacilityDto';
import { FacilityInfoDto } from '../types/Facility/FacilityInfoDto';
import { FacilityMapDto } from '../types/Facility/FacilityMapDto';
import { UpdateFacilityDto } from '../types/Facility/UpdateFacilityDto';
import { PaginatedDto } from '../types/Paginated/PaginatedDto';
import { facilities } from './endpoints';
import Api from './index';

export default class FacilitiesApi {
    constructor(private readonly api: Api) {}

    public create(facility: CreateFacilityDto): Promise<FacilityInfoDto> {
        return this.api.post(facilities.create(), facility);
    }
    public getAll(/*?*/): Promise<FacilityInfoDto[]> {
        return this.api.get(facilities.getAll());
    }
    public getAllPag(/*?*/): Promise<PaginatedDto<FacilityInfoDto>> {
        return this.api.get(facilities.getAllPag());
    }
    public getAllMap(/*?*/): Promise<FacilityMapDto> {
        return this.api.get(facilities.getAllMap());
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
