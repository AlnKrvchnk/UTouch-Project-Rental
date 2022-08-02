import { Auth } from '../types/Auth';
import { User } from '../types/User';
import { auth } from './endpoints';
import Api from './index';

export default class AuthApi {
    constructor(private readonly api: Api) {}

    public getCode({ phone }: Auth): Promise<void> {
        return this.api.post(auth.getCode(), phone);
    }

    public login(authInform: Auth): Promise<string> {
        return this.api.post(auth.login(), authInform);
    }

    public whoami(): Promise<User> {
        return this.api.get(auth.whoami());
    }
}
