export interface PaginatedDto<Data> {
    data: Data[];
    page: number;
    limit: number;
    total: number;
}
