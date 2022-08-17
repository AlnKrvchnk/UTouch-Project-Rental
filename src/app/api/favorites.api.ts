import { FacilityInfoDto } from '../types/Facility/FacilityInfoDto';
import { favorites } from './endpoints';
import Api from './index';

export default class FavoritesFacilityApi {
    constructor(private readonly api: Api) {}
    public create(id: number): Promise<FacilityInfoDto> {
        return this.api.post(favorites.create(), { facilityId: id });
    }
    public getFavorites(): Promise<
        {
            id: number;
            userId: number;
            facility: FacilityInfoDto;
        }[]
    > {
        return this.api.get(favorites.getFavorites());
    }
    public getById(id: string): Promise<FacilityInfoDto> {
        return this.api.get(favorites.getById(id));
    }

    public delete(id: string): Promise<boolean> {
        return this.api.delete(favorites.delete(id));
    }
}
