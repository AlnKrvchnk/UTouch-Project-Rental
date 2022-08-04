export interface RequestPaginationDto<Data> {
    data: Data[];
    page: number;
    limit: number;
    total: number;
}
