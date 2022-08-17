import { action, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';
import { api } from '../api';
import { FacilityInfoDto } from '../types/Facility/FacilityInfoDto';

class FavoriteFacilityStore {
    @observable facility: FacilityInfoDto[] = [];
    @observable isLoad: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }

    // @computed get isLoad() {
    //     return this.facility.length !== 0;
    // }
    @action
    public async addFavoriteFacility(id: number) {
        try {
            const req = await api.favoritesFacility.create(id);
            console.log(req);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async removeFavoriteFacility(id: number) {
        try {
            const req = await api.favoritesFacility.delete(String(id));
            console.log(req);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getFavoriteFacilitybyId(id: number) {
        try {
            const req = await api.favoritesFacility.getById(String(id));
            console.log(req);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getFavoriteFacility() {
        try {
            const req = await api.favoritesFacility.getFavorites();
            this.facility = [req[0].facility];
            console.log(this.facility, req, req[0].facility);
            this.isLoad = true;
        } catch (err) {
            console.log(err);
        }
    }
}

export default FavoriteFacilityStore;
