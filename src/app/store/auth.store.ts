//@ts-ignore
import { AuthTokenDto } from '@types/Auth/AuthTokenDto';
//@ts-ignore
import { GetCodeDto } from '@types/Auth/GetCodeDto';
//@ts-ignore
import { LoginDto } from '@types/Auth/LoginDto';
import { action, computed, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';
import { api } from '../api';
import { WhoamiDto } from '../types/Auth/WhomiDto';

class AuthStore {
    @observable isPhoneSend: boolean = false;
    @observable isLoading: boolean = false;
    @observable error: string | undefined = undefined;
    @observable user: WhoamiDto | undefined = undefined;
    constructor() {
        makeAutoObservable(this);
    }
    @action
    public async whoami() {
        this.isLoading = false;
        try {
            console.log('await');
            this.user = await api.auth.whoami();
        } catch (err) {
            this.user = undefined;
            console.log(err);
        }
        this.isLoading = true;
    }
    @computed get isAuth() {
        return this.user !== undefined;
    }
    @action
    public async getCode(phone: GetCodeDto) {
        try {
            await api.auth.getCode(phone);
            this.isPhoneSend = true;
        } catch (err) {
            //@ts-ignore
            this.error = (err as Error).response.data.error_message;
        }
    }
    @action
    public async login(inform: LoginDto) {
        try {
            const token: AuthTokenDto = await api.auth.login(inform);
            localStorage.setItem('token', `Bearer ${token.token}`);
            this.whoami();
        } catch (err) {
            //@ts-ignore
            this.error = (err as Error).response.data.error_message;
        }
    }
}

export default AuthStore;
