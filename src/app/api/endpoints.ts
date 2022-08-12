import { GetAllFacilityDto } from '@types/Facility/GetAllFacilityDto';
import { GetAllMapFacilityDto } from '@types/Facility/GetAllMapFacilityDto';
import { GetAllPagFacilityDto } from '@types/Facility/GetAllPagFacilityDto';

export const facilities = {
    create: () => '/facilities',
    getAll: (facilityFilter: GetAllFacilityDto) => '/facilities',
    getAllPag: (facilityFilter: GetAllPagFacilityDto) => '/v2/facilities',
    getAllMap: (facilityFilter: GetAllMapFacilityDto) => '/facilities/map',

    getById: (id: string) => `/facilities/${id}`,
    update: (id: string) => `/facilities/${id}`,
    delete: (id: string) => `/facilities/${id}`,
};
export const auth = {
    getCode: () => '/auth/getCode',
    login: () => '/auth/login',
    whoami: () => '/auth/whoami',
};
