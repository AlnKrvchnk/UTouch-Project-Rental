import axios, { AxiosInstance } from 'axios';
import { config } from './config';

class Api {
    private readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create(config);

        this.client.interceptors.response.use((res) => res.data);
        this.client.interceptors.request.use((config) => ({
            ...config,
            headers: { Authorization: 'token' },
            // headers: { Authorization: localStorage.geItem('token') },
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
