import { AuthTokenDto } from '@/app/types/Auth/AuthTokenDto';
import { GetCodeDto } from '@/app/types/Auth/GetCodeDto';
import { LoginDto } from '@/app/types/Auth/LoginDto';
import { WhoamiDto } from '@/app/types/Auth/WhomiDto';

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
