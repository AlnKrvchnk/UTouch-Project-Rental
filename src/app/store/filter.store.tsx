//@ts-ignore
//@ts-ignore
//@ts-ignore
//@ts-ignore
//@ts-ignore
//@ts-ignore
import { action, computed, makeAutoObservable, observable, toJS } from 'mobx';
import {} from 'mobx-react';
import { api } from '../api';
import { FacilityCategory } from '../types/Filter/FacilityCategory';
import { RangeFilter } from '../types/Filter/RangeFilter';
import { ReadFilterDto } from '../types/Filter/ReadFilterDto';
import { SortBy } from '../types/Filter/SortBy';

class TodoStore {
    @observable filterList: ReadFilterDto = {};
    @observable selectFilter: ReadFilterDto = {};
    @observable sortBy: string | undefined = undefined;
    @observable category: string | undefined = undefined;
    constructor() {
        makeAutoObservable(this);
    }
    @computed get isLoad() {
        return this.filterList;
    }

    @action
    public setSortBy(type: string | undefined) {
        if (type) {
            for (const key in SortBy) {
                //@ts-ignore
                if (SortBy[key] === type) {
                    this.sortBy = key;
                }
            }
        } else this.sortBy = type;
    }
    @action
    public setCategory(type: string) {
        if (type) {
            for (const key in FacilityCategory) {
                //@ts-ignore
                if (FacilityCategory[key] === type) {
                    this.category = key;
                }
            }
        } else this.category = type;
        console.log(this.category);
    }
    @action
    public async loadFilter() {
        try {
            const requestRes = await api.filters.getFilters();
            this.filterList = toJS(requestRes);
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public removeFilter(filterKey: string) {
        const tmp = toJS(this.selectFilter);
        //@ts-ignore
        delete tmp[filterKey];
        console.log(tmp);
        this.selectFilter = tmp;
        console.log(this.selectFilter);
    }
    @action
    public setSelectFilter(filterKey: string, value: string | RangeFilter) {
        const tmp = toJS(this.selectFilter);
        if (typeof value === 'string') {
            //@ts-ignore
            tmp[filterKey]
                ? //@ts-ignore
                  tmp[filterKey].includes(value)
                    ? //@ts-ignore
                      tmp[filterKey].pop(value)
                    : //@ts-ignore
                      tmp[filterKey].push(value)
                : //@ts-ignore
                  (tmp[filterKey] = [value]);
            //@ts-ignore
            tmp[filterKey].length === 0 && delete tmp[filterKey];
        } else {
            //@ts-ignore
            tmp[filterKey] = value;
        }
        this.selectFilter = tmp;
    }
}

export default TodoStore;
