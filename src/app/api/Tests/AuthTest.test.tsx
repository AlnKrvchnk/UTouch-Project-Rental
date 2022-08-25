/* eslint-disable jest/no-conditional-expect */
import { GetCodeDto } from '@/app/types/Auth/GetCodeDto';
import { LoginDto } from '@/app/types/Auth/LoginDto';
import { WhoamiDto } from '@/app/types/Auth/WhomiDto';
import { AuthError } from '@/app/types/Error/ApiError/AuthError';
import { api } from '..';

describe('getCodeRequest', () => {
    test('success', async () => {
        const phone: GetCodeDto = { phone: '71231231212' };
        return api.auth.getCode(phone).then((actual) => {
            expect(actual).toBeTruthy();
        });
    }, 10000);
    test('error noSuchUser', async () => {
        const phone: GetCodeDto = { phone: 'phone' };
        expect.assertions(1);
        return api.auth.getCode(phone).catch((err) => {
            const errorCode: string = err.response.data.error_code;
            expect(errorCode).toEqual(AuthError.noSuchUser);
        });
    }, 10000);
    // test('error smsTimeLimit', async () => {
    //     const phone: GetCodeDto = { phone: 'phone' };
    //     expect.assertions(1);
    //     return api.auth.getCode(phone).catch((err) => {
    //         const errorCode: string = err.response.data.error_code;
    //         expect(errorCode).toEqual(AuthError.smsTimeLimit);
    //     });
    // }, 10000);
    // test('error smsTimeLimit', () => {
    //     const phone: GetCodeDto = { phone: 'phone' };
    //     expect.assertions(1);
    //     const fn = async () => {
    //         try {
    //             await api.auth.getCode(phone).catch((err) => {
    //                 const errorCode: string = err.response.data.error_code;
    //                 expect(errorCode).toEqual(AuthError.smsTimeLimit);
    //             });
    //         } catch (err) {
    //             fn();
    //         }
    //     };
    // }, 10000);
});
describe('loginRequest', () => {
    test('success', async () => {
        const inf: LoginDto = { phone: '71231231212', code: '1111' };
        return api.auth.login(inf).then((actual) => {
            expect(typeof actual.token).toBe('string');
        });
    });
    test('error', async () => {
        const inf: LoginDto = { phone: '71231231212', code: '1011' };
        return api.auth.login(inf).catch((err) => {
            const error: string = err.response.data.error_code;
            expect(error).toMatch(AuthError.invalidCode);
        });
    });
});
describe('whoamiRequest', () => {
    test('success', async () => {
        const user: WhoamiDto = {
            name: 'Content Manager',
            role: 'MANAGER',
        };
        console.log('h', localStorage.getItem('token'));
        return api.auth.whoami().then((actual) => {
            console.log('h', localStorage.getItem('token'));
            expect(actual).toEqual(user);
        });
    });
});
