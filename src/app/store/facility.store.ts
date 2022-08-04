import { action, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';
import { api } from '../api';
import { CreateFacilityDto } from '../types/Facility/CreateFacilityDto';
import { FacilityInfoDto } from '../types/Facility/FacilityInfoDto';
import { FacilityMapDto } from '../types/Facility/FacilityMapDto';
import { GetAllFacilityDto } from '../types/Facility/GetAllFacilityDto';
import { GetAllMapFacilityDto } from '../types/Facility/GetAllMapFacilityDto';
import { GetAllPagFacilityDto } from '../types/Facility/GetAllPagFacilityDto';
import { UpdateFacilityDto } from '../types/Facility/UpdateFacilityDto';

class TodoStore {
    @observable page: number | undefined = undefined;
    @observable limit: number | undefined = undefined;
    @observable total: number | undefined = undefined;
    @observable facilityMap: FacilityMapDto | undefined = undefined;
    @observable facility: FacilityInfoDto | undefined = undefined;
    @observable data: FacilityInfoDto[] = [];
    @observable isLoad = false;
    constructor() {
        makeAutoObservable(this);
    }
    @action
    public async create(facility: CreateFacilityDto) {
        this.isLoad = false;
        try {
            const requestRes = await api.facilities.create(facility);
            this.data = [requestRes, ...this.data];
            this.isLoad = true;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async update(id: string, facility: UpdateFacilityDto) {
        this.isLoad = false;
        try {
            const requestRes = await api.facilities.update(id, facility);
            const tmp = this.data.map((item) =>
                item.id === id ? requestRes : item
            );
            this.data = tmp;
            this.isLoad = true;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getById(id: string) {
        this.isLoad = false;
        try {
            this.facility = await api.facilities.getById(id);
            this.isLoad = true;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getAll(facilityFilter: GetAllFacilityDto) {
        this.isLoad = false;
        try {
            this.data = await api.facilities.getAll(facilityFilter);
            this.isLoad = true;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getAllMap(facilityFilter: GetAllMapFacilityDto) {
        this.isLoad = false;
        try {
            this.facilityMap = await api.facilities.getAllMap(facilityFilter);
            this.isLoad = true;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async getAllPag(facilityFilter: GetAllPagFacilityDto) {
        this.isLoad = false;
        try {
            const requestRes = await api.facilities.getAllPag(facilityFilter);
            // {this.page, this.limit, this.total, this.data} = requestRes;
            this.page = requestRes.page;
            this.limit = requestRes.limit;
            this.total = requestRes.total;
            this.data = requestRes.data;
            this.isLoad = true;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async delete(id: string) {
        this.isLoad = false;
        try {
            if (await api.facilities.delete(id)) {
                const tmp = this.data.filter((item) => item.id !== id);
                this.data = tmp;
            }
            this.isLoad = true;
        } catch (err) {
            console.log(err);
        }
    }
}

export default TodoStore;
