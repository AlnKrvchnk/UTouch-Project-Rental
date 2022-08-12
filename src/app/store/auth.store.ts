//@ts-ignore 
import { AuthTokenDto } from '@types/Auth/AuthTokenDto';
//@ts-ignore 
import { GetCodeDto } from '@types/Auth/GetCodeDto';
//@ts-ignore 
import { LoginDto } from '@types/Auth/LoginDto';
import { action, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';
import { api } from '../api';
import { WhoamiDto } from '../types/Auth/WhomiDto';

class AuthStore {
    @observable isPhoneSend: boolean = false;
    @observable isAuth: boolean = false;
    @observable error: string | undefined = undefined;
    @observable user: WhoamiDto | undefined = undefined;
    constructor() {
        makeAutoObservable(this);
    }
    public async whoami() {
        try {
            this.user = await api.auth.whoami();
        } catch (err) {
            this.error = (err as Error).response.data.error_message;
        }
    }
    // @computed get isAuth() {
    //     console.log('Auth')
    //     this.whoami();
    //     return this.user !== undefined;
    // }
    @action
    public async getCode(phone: GetCodeDto) {
        try {
            await api.auth.getCode(phone);
            this.isPhoneSend = true;
        } catch (err) {
            this.error = (err as Error).response.data.error_message;
        }
    }
    @action
    public async login(inform: LoginDto) {
        try {
            console.log(inform);
            const token: AuthTokenDto = await api.auth.login(inform);
            localStorage.setItem('token', token.token);
            this.isAuth = true;
        } catch (err) {
            this.error = (err as Error).response.data.error_message;
        }
    }
}

export default AuthStore;
