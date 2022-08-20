import formatedFilters from '@/utilites/formatedFilters';
//@ts-ignore
import { GetAllMapFacilityDto } from '@types/Facility/GetAllMapFacilityDto';
//@ts-ignore
import { GetAllPagFacilityDto } from '@types/Facility/GetAllPagFacilityDto';
//@ts-ignore
import { GetAllFacilityDto } from '@types/Facility/GetAllFacilityDto';

export const facilities = {
    create: () => '/facilities',
    getAll: (facilityFilter: GetAllFacilityDto) =>
        `/facilities${formatedFilters(facilityFilter)}`,
    getAllPag: (facilityFilter: GetAllPagFacilityDto) =>
        `/v2/facilities${formatedFilters(facilityFilter)}`,
    getAllMap: (facilityFilter: GetAllMapFacilityDto) =>
        `/facilities/map${formatedFilters(facilityFilter)}`,

    getById: (id: string) => `/facilities/${id}`,
    update: (id: string) => `/facilities/${id}`,
    delete: (id: string) => `/facilities/${id}`,
};
export const auth = {
    getCode: () => '/auth/getCode',
    login: () => '/auth/login',
    whoami: () => '/auth/whoami',
};
export const filters = {
    getFilters: () => '/filters',
};
export const files = {
    uploadImage: () => '/files/uploadImage',
    getImage: (filename: string) => `/files/getImage/${filename}`,
    uploadDocument: () => '/files/uploadDocument',
    getDocument: (filename: string) => `/files/getDocument/${filename}`,
};

export const favorites = {
    create: () => '/favourites',
    getFavorites: () => '/favourites',
    getById: (id: string) => `/favourites/${id}`,
    delete: (id: string) => `/favourites/${id}`,
};
