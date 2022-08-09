import { AuthTokenDto } from '@Types/Auth/AuthTokenDto';
import { GetCodeDto } from '@Types/Auth/GetCodeDto';
import { LoginDto } from '@Types/Auth/LoginDto';
import { action, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';
import { api } from '../api';
import { WhoamiDto } from '../types/Auth/WhomiDto';

class AuthStore {
    @observable isAuth: boolean = false;
    @observable isPhoneSend: boolean = false;
    @observable name: string | undefined = undefined;
    @observable role: string | undefined = undefined;
    constructor() {
        makeAutoObservable(this);
    }

    @action
    public async getCode(phone: GetCodeDto) {
        try {
            await api.auth.getCode(phone);
            this.isPhoneSend = true;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async login(inform: LoginDto) {
        try {
            const token: AuthTokenDto = await api.auth.login(inform);
            localStorage.setItem('token', token.token);
            this.isAuth = true;
        } catch (err) {
            console.log(err);
        }
    }
    @action
    public async whoami() {
        try {
            const inform: WhoamiDto = await api.auth.whoami();
            this.name = inform.name;
            this.role = inform.role;
        } catch (err) {
            console.log(err);
        }
    }
}

export default AuthStore;
