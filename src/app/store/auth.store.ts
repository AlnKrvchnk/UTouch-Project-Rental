import { AuthTokenDto } from '@/app/types/Auth/AuthTokenDto';
import { GetCodeDto } from '@/app/types/Auth/GetCodeDto';
import { LoginDto } from '@/app/types/Auth/LoginDto';
import { WhoamiDto } from '@/app/types/Auth/WhomiDto';
import { CustomError } from '@/app/types/Error/CustomError';
import { action, computed, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';
import { api } from '../api';

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
            this.error = (err as CustomError).response.data.error_message;
        }
    }
    @action
    public async login(inform: LoginDto) {
        try {
            const token: AuthTokenDto = await api.auth.login(inform);
            localStorage.setItem('token', `Bearer ${token.token}`);
            this.whoami();
        } catch (err) {
            this.error = (err as CustomError).response.data.error_message;
        }
    }
}

export default AuthStore;
