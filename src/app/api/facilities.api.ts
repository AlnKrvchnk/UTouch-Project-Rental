import { Facility } from '../types/Facility';
import { facilities } from './endpoints';
import Api from './index';

export default class FacilitiesApi {
    constructor(private readonly api: Api) {}

    public create(item: Facility): Promise<Facility> {
        return this.api.post(facilities.create(), item);
    }

    // public getAll(authInform: Auth): Promise<Facilities[]> {
    //     return this.api.get(facilities.getAll(), authInform);
    // }

    // public getAllPag(authInform: Auth): Promise<string> {
    //     return this.api.get(facilities.getAllPag(), authInform);
    // }
    // public getAllMap(authInform: Auth): Promise<string> {
    //     return this.api.het(facilities.getAllMap(), authInform);
    // }
    public getById(id: string): Promise<Facility> {
        return this.api.get(facilities.getById(id));
    }
    public update(id: string, item: Facility): Promise<Facility> {
        return this.api.patch(facilities.update(id), item);
    }
    public delete(id: string): Promise<string> {
        return this.api.delete(facilities.delete(id));
    }
}
