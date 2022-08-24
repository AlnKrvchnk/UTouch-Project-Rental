import { api } from '@/app/api';
import { FavouriteInfoDto } from '@/app/types/Favourite/FavouriteInfoDto';
import { action, computed, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';

class FavoriteFacilityStore {
    @observable favorites: FavouriteInfoDto[] | undefined = undefined;
    @observable currentFavorites: FavouriteInfoDto | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    }
    @computed get isLoad() {
        return this.favorites !== undefined;
    }
    @computed get isEmpty() {
        return this.favorites && this.favorites.length !== 0;
    }
    @action
    public async addFavoriteFacility(id: string) {
        try {
            const req = await api.favoritesFacility.create(id);
            console.log(req);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async removeFavoriteFacility(id: string) {
        try {
            const req = await api.favoritesFacility.delete(id);
            console.log(req);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getFavoriteFacilitybyId(id: string) {
        try {
            const req = await api.favoritesFacility.getById(id);
            console.log(req);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getFavoriteFacility() {
        try {
            const req = await api.favoritesFacility.getFavorites();
            this.favorites = req;
            console.log(this.favorites, req, req[0].facility);
        } catch (err) {
            console.log(err);
        }
    }
}

export default FavoriteFacilityStore;
