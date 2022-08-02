export const facilities = {
    create: () => '/facilities',
    getAll: () => '/facilities',
    getAllPag: () => '/v2/facilities',
    getAllMap: () => '/facilities/map',

    getById: (id: string) => `/facilities/${id}`,
    update: (id: string) => `/facilities/${id}`,
    delete: (id: string) => `/facilities/${id}`,
};
export const auth = {
    getCode: () => '/auth/getCode',
    login: () => '/auth/login',
    whoami: () => '/auth/whoami',
};
