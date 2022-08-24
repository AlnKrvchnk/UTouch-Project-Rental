import { api } from '@/app/api';
import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import { FacilityMapDto } from '@/app/types/Facility/FacilityMapDto';
import { GetAllFacilityDto } from '@/app/types/Facility/GetAllFacilityDto';
import { GetAllMapFacilityDto } from '@/app/types/Facility/GetAllMapFacilityDto';
import { GetAllPagFacilityDto } from '@/app/types/Facility/GetAllPagFacilityDto';
import { UpdateFacilityDto } from '@/app/types/Facility/UpdateFacilityDto';
import { action, computed, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';

class FacilityStore {
    @observable page: number | undefined = undefined;
    @observable limit: number | undefined = undefined;
    @observable total: number | undefined = undefined;
    @observable facilityMap: FacilityMapDto | undefined = undefined;
    @observable facility: FacilityInfoDto | undefined = undefined;
    @observable data: FacilityInfoDto[] | undefined = [];
    constructor() {
        makeAutoObservable(this);
    }
    @computed get isLoad() {
        return this.data !== undefined;
    }
    @computed get isEmpty() {
        return this.data && this.data.length !== 0;
    }
    @computed get totalPageCount() {
        return this.total && this.limit && Math.ceil(this.total / this.limit);
    }

    @action
    public async update(id: string, facility: UpdateFacilityDto) {
        try {
            const requestRes = await api.facilities.update(id, facility);
            if (this.data) {
                const tmp = this.data.map((item) =>
                    item.id === id ? requestRes : item
                );
                this.data = tmp;
            }
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getById(id: string) {
        try {
            this.facility = await api.facilities.getById(id);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getAll(facilityFilter: GetAllFacilityDto) {
        try {
            this.data = await api.facilities.getAll(facilityFilter);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getAllMap(facilityFilter: GetAllMapFacilityDto) {
        try {
            this.facilityMap = await api.facilities.getAllMap(facilityFilter);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getAllPag(facilityFilter: GetAllPagFacilityDto) {
        try {
            const requestRes = await api.facilities.getAllPag(facilityFilter);
            this.page = requestRes.page;
            this.limit = requestRes.limit;
            this.total = requestRes.total;
            this.data = requestRes.data;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async delete(id: string) {
        try {
            if ((await api.facilities.delete(id)) && this.data) {
                const tmp = this.data.filter((item) => item.id !== id);
                this.data = tmp;
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export default FacilityStore;
