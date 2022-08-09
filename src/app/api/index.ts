import axios, { AxiosInstance } from 'axios';
import AuthApi from './auth.api';
import { config } from './config';
import FacilitiesApi from './facilities.api';

class Api {
    private readonly client: AxiosInstance;
    public readonly facilities: FacilitiesApi;
    public readonly auth: AuthApi;

    constructor() {
        this.client = axios.create(config);
        this.client.interceptors.response.use((res) => res.data);
        this.facilities = new FacilitiesApi(this);
        this.auth = new AuthApi(this);
        this.client.interceptors.request.use((config) => ({
            ...config,
            headers: { Authorization: localStorage.getItem('token') },
        }));
    }

    public get<Response>(url: string): Promise<Response> {
        return this.client.get<null, Response>(url);
    }

    public post<Request, Response>(
        url: string,
        body: Request
    ): Promise<Response> {
        return this.client.post<Request, Response>(url, body);
    }

    public patch<Request, Response>(
        url: string,
        body: Request
    ): Promise<Response> {
        return this.client.patch<Request, Response>(url, body);
    }

    public delete<Response>(url: string): Promise<Response> {
        return this.client.delete<null, Response>(url);
    }
}

export default Api;
export const api = new Api();
