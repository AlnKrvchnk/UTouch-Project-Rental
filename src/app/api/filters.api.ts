import { ReadFilterDto } from '../types/Filter/ReadFilterDto';
import { filters } from './endpoints';
import Api from './index';

export default class FiltersApi {
    constructor(private readonly api: Api) {}

    public getFilters(): Promise<ReadFilterDto> {
        return this.api.get(filters.getFilters());
    }
}
