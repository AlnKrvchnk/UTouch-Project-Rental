import { api } from '@/app/api';
import { DeliveryDateDto } from '@/app/types/Filter/DeliveryDateDto';
import { FacilityCategory } from '@/app/types/Filter/FacilityCategory';
import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import { FilterTitle, ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import { SortBy } from '@/app/types/Filter/SortBy';
import { action, computed, makeAutoObservable, observable, toJS } from 'mobx';
import {} from 'mobx-react';

class TodoStore {
    @observable filterList: ReadFilterDto | undefined = undefined;
    @observable selectFilter: ReadFilterDto = {};
    @observable sortBy: string | undefined = undefined;
    @observable category: string | undefined = undefined;
    @observable search: string | undefined = undefined;
    constructor() {
        makeAutoObservable(this);
    }
    @computed get isLoad() {
        return this.filterList !== undefined;
    }
    @action
    public setSearch(value: string | undefined) {
        this.search = value;
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
    public setSortBy(key: string | undefined) {
        switch (key) {
            case SortBy.byname:
                this.sortBy = 'byname';
                break;
            case SortBy.priceasc:
                this.sortBy = 'priceasc';
                break;
            case SortBy.pricedesc:
                this.sortBy = 'pricedesc';
                break;
            case SortBy.pubdate:
                this.sortBy = 'pubdate';
                break;
            default:
                this.sortBy = undefined;
        }
    }
    @action
    public setCategory(key: string | undefined) {
        switch (key) {
            case FacilityCategory.flat:
                this.category = 'flat';
                break;
            case FacilityCategory.isillegal:
                this.category = 'isillegal';
                break;
            case FacilityCategory.new:
                this.category = 'new';
                break;
            case FacilityCategory.newbuilding:
                this.category = 'newbuilding';
                break;
            case FacilityCategory.popular:
                this.category = 'popular';
                break;
            case FacilityCategory.village:
                this.category = 'village';
                break;
            case FacilityCategory.withsales:
                this.category = 'withsalest';
                break;
            default:
                this.category = undefined;
        }
    }
    @action
    public setUserFilter(key: string, value: string | RangeFilter) {
        const tmp = toJS(this.selectFilter);
        switch (key) {
            case FilterTitle.benefits:
                if (tmp.benefits) {
                    const index = tmp.benefits.indexOf(value as string);
                    index === -1
                        ? tmp.benefits.push(value as string)
                        : tmp.benefits.splice(index, 1);
                } else tmp.benefits = [value as string];
                tmp.benefits.length === 0 && delete tmp.benefits;
                break;
            case FilterTitle.decorations:
                if (tmp.decorations) {
                    const index = tmp.decorations.indexOf(value as string);
                    index === -1
                        ? tmp.decorations.push(value as string)
                        : tmp.decorations.splice(index, 1);
                } else tmp.decorations = [value as string];
                tmp.decorations.length === 0 && delete tmp.decorations;
                break;
            // case FilterTitle.deliveryDate:
            //     if (tmp.deliveryDate) {
            //         const index = tmp.benefits.indexOf(value as string);
            //         index === -1
            //             ? tmp.deliveryDate.push(value as string)
            //             : tmp.deliveryDate.splice(index, 1);
            //     } else tmp.deliveryDate = [value as string];
            //     !tmp.deliveryDate && delete tmp.deliveryDate;
            //     break;
            case FilterTitle.deliveryDates:
                const tmpValue: DeliveryDateDto = {
                    quarter: (value as string).slice(0, -5),
                    year: Number((value as string).slice(-4)),
                };
                if (tmp.deliveryDates) {
                    for (
                        let index = 0;
                        index < tmp.deliveryDates.length;
                        index++
                    ) {
                        if (
                            tmp.deliveryDates[index].quarter ===
                                tmpValue.quarter &&
                            tmp.deliveryDates[index].year === tmpValue.year
                        ) {
                            tmp.deliveryDates.splice(index, 1);
                            tmp.deliveryDates.length === 0 &&
                                delete tmp.deliveryDates;
                            break;
                        }
                    }
                    tmp.deliveryDates && tmp.deliveryDates.push(tmpValue);
                } else tmp.deliveryDates = [tmpValue];
                break;

            case FilterTitle.districts:
                if (tmp.districts) {
                    const index = tmp.districts.indexOf(value as string);
                    index === -1
                        ? tmp.districts.push(value as string)
                        : tmp.districts.splice(index, 1);
                } else tmp.districts = [value as string];
                tmp.districts.length === 0 && delete tmp.districts;
                break;
            case FilterTitle.facilityTypes:
                if (tmp.facilityTypes) {
                    const index = tmp.facilityTypes.indexOf(value as string);
                    index === -1
                        ? tmp.facilityTypes.push(value as string)
                        : tmp.facilityTypes.splice(index, 1);
                } else tmp.facilityTypes = [value as string];
                tmp.facilityTypes.length === 0 && delete tmp.facilityTypes;
                break;
            case FilterTitle.houseClasses:
                if (tmp.houseClasses) {
                    const index = tmp.houseClasses.indexOf(value as string);
                    index === -1
                        ? tmp.houseClasses.push(value as string)
                        : tmp.houseClasses.splice(index, 1);
                } else tmp.houseClasses = [value as string];
                tmp.houseClasses.length === 0 && delete tmp.houseClasses;
                break;
            case FilterTitle.microDistricts:
                if (tmp.microDistricts) {
                    const index = tmp.microDistricts.indexOf(value as string);
                    index === -1
                        ? tmp.microDistricts.push(value as string)
                        : tmp.microDistricts.splice(index, 1);
                } else tmp.microDistricts = [value as string];
                tmp.microDistricts.length === 0 && delete tmp.microDistricts;
                break;
            case FilterTitle.paymentOptions:
                if (tmp.paymentOptions) {
                    const index = tmp.paymentOptions.indexOf(value as string);
                    index === -1
                        ? tmp.paymentOptions.push(value as string)
                        : tmp.paymentOptions.splice(index, 1);
                } else tmp.paymentOptions = [value as string];
                tmp.paymentOptions.length === 0 && delete tmp.paymentOptions;
                break;
            case FilterTitle.registrations:
                if (tmp.registrations) {
                    const index = tmp.registrations.indexOf(value as string);
                    index === -1
                        ? tmp.registrations.push(value as string)
                        : tmp.registrations.splice(index, 1);
                } else tmp.registrations = [value as string];
                tmp.registrations.length === 0 && delete tmp.registrations;
                break;
            case FilterTitle.distanceToTheBeach:
                tmp.distanceToTheBeach = value as RangeFilter;
                break;
            case FilterTitle.price:
                tmp.price = value as RangeFilter;
                break;
            case FilterTitle.pricePerMeter:
                tmp.pricePerMeter = value as RangeFilter;
                break;
            case FilterTitle.square:
                tmp.square = value as RangeFilter;
                break;
        }
        this.selectFilter = tmp;
    }
    @action
    public removeFilter(key: string) {
        const tmp = toJS(this.selectFilter);
        console.log(key);
        switch (key) {
            case FilterTitle.benefits:
                delete tmp.benefits;
                break;
            case FilterTitle.decorations:
                delete tmp.decorations;
                break;
            case FilterTitle.deliveryDate:
                delete tmp.deliveryDate;
                break;
            case FilterTitle.deliveryDates:
                delete tmp.deliveryDates;
                break;
            case FilterTitle.districts:
                delete tmp.districts;
                break;
            case FilterTitle.facilityTypes:
                delete tmp.facilityTypes;
                break;
            case FilterTitle.houseClasses:
                delete tmp.houseClasses;
                break;
            case FilterTitle.microDistricts:
                delete tmp.microDistricts;
                break;
            case FilterTitle.paymentOptions:
                delete tmp.paymentOptions;
                break;
            case FilterTitle.registrations:
                delete tmp.registrations;
                break;
            case FilterTitle.distanceToTheBeach:
                delete tmp.distanceToTheBeach;
                break;
            case FilterTitle.price:
                delete tmp.price;
                break;
            case FilterTitle.pricePerMeter:
                delete tmp.pricePerMeter;
                break;
            case FilterTitle.square:
                delete tmp.square;
                break;
        }
        this.selectFilter = tmp;
    }
}

export default TodoStore;
