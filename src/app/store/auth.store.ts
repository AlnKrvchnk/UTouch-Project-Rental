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
    // @observable isAuth: boolean = false;
    @observable error: string | undefined = undefined;
    @observable user: WhoamiDto | undefined = undefined;
    constructor() {
        makeAutoObservable(this);
    }
    public async whoami() {
        try {
            console.log(document.cookie);
            this.user = await api.auth.whoami();
        } catch (err) {
            //@ts-ignore
            // this.error = (err as Error).response.data.error_message;
            this.user = { name: '', role: '' };
        }
    }
    @computed get isAuth() {
        return this.user !== undefined;
    }
    @action
    public async getCode(phone: GetCodeDto) {
        try {
            const req = await api.auth.getCode(phone);
            console.log(req);
            this.isPhoneSend = true;
        } catch (err) {
            console.log(err);
            //@ts-ignore
            this.error = (err as Error).response.data.error_message;
        }
    }
    @action
    public async login(inform: LoginDto) {
        try {
            const token: AuthTokenDto = await api.auth.login(inform);
            // localStorage.setItem('token', token.token);
            document.cookie = `authToken=${token.token}; Path=/; SameSite=None; Secure`;
            this.whoami();
        } catch (err) {
            //@ts-ignore
            this.error = (err as Error).response.data.error_message;
        }
    }
}

export default AuthStore;
