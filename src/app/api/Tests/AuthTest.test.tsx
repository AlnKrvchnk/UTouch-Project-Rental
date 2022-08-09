import { GetCodeDto } from '@/app/types/Auth/GetCodeDto';
import { LoginDto } from '@/app/types/Auth/LoginDto';
import { AuthError } from '@/app/types/Error/ApiError/AuthError';
import { api } from '..';

describe('getCodeRequest', () => {
    test('success', async () => {
        const phone: GetCodeDto = { phone: '71231231212' };
        await expect(api.auth.getCode(phone)).resolves.toBeTruthy();
    });
    test('error noSuchUser', async () => {
        try {
            const phone: GetCodeDto = { phone: 'phone' };
            const actual = await api.auth.getCode(phone);
        } catch (err) {
            const error: string = err.response.data.error_code;
            expect(error).toMatch(AuthError.noSuchUser);
        }
    });
    test('error smsTimeLimit', async () => {
        try {
            const phone: GetCodeDto = { phone: '71231231212' };
            const actual = await api.auth.getCode(phone);
        } catch (err) {
            const error = err.response.data.error_code;
            expect(error).toMatch(AuthError.smsTimeLimit);
        }
    });
});
describe('loginRequest', () => {
    // test('success', async () => {
    //     try {
    //         const inf: LoginDto = { phone: '71231231212', code: '1111' };
    //         const actual = await api.auth.login(inf);
    //         expect(actual).toBeInstanceOf(AuthTokenDto);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // });
    test('error', async () => {
        try {
            const inf: LoginDto = { phone: '71231231212', code: '1011' };
            const actual = await api.auth.login(inf);
        } catch (err) {
            const error: string = err.response.data.error_code;
            expect(error).toMatch(AuthError.invalidCode);
        }
    });
});
