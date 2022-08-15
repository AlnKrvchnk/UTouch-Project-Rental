//@ts-ignore
import { AuthTokenDto } from '@types/Auth/AuthTokenDto';
//@ts-ignore
import { GetCodeDto } from '@types/Auth/GetCodeDto';
//@ts-ignore
import { LoginDto } from '@types/Auth/LoginDto';
//@ts-ignore
import { WhoamiDto } from '@types/Auth/WhomiDto';

import { auth } from './endpoints';
import Api from './index';

export default class AuthApi {
    constructor(private readonly api: Api) {}

    public getCode(inform: GetCodeDto): Promise<void> {
        return this.api.post(auth.getCode(), inform);
    }
    public login(inform: LoginDto): Promise<AuthTokenDto> {
        return this.api.post(auth.login(), inform);
    }
    public whoami(): Promise<WhoamiDto> {
        return this.api.get(auth.whoami());
    }
}
