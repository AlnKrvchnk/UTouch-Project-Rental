/* eslint-disable jest/no-conditional-expect */
import { lengthError } from '@/app/types/Error/PhoneNumberError';
import formatedPhone from '../formatedPhoneNumber';

test('success format +7', async () => {
    const value = '9898989898';
    const format = '+7(000) 000-0000';
    const expected = '+7(989) 898-9898';
    const actual = formatedPhone(value, format);
    expect(actual).toEqual(expected);
});
test('success format 8', async () => {
    const value = '9898989898';
    const format = '8(000) 000-0000';
    const expected = '8(989) 898-9898';
    const actual = formatedPhone(value, format);
    expect(actual).toEqual(expected);
});
test('success format +38', async () => {
    const value = '9898989898';
    const format = '+38(000) 000-0000';
    const expected = '+38(989) 898-9898';
    const actual = formatedPhone(value, format);
    expect(actual).toEqual(expected);
});
test('success value +38', async () => {
    const value = '+389898989898';
    const format = '+38(000) 000-0000';
    const expected = '+38(989) 898-9898';
    const actual = formatedPhone(value, format);
    expect(actual).toEqual(expected);
});
test('success value -', async () => {
    const value = '+3-8-98-98+9(89)898';
    const format = '+38(000) 000-0000';
    const expected = '+38(989) 898-9898';
    const actual = formatedPhone(value, format);
    expect(actual).toEqual(expected);
});
test('catch lengthError', async () => {
    const value = '989898976557786876';
    const format = '+38(000) 000-0000';
    try {
        formatedPhone(value, format);
    } catch (err) {
        expect(err as Error).toEqual(lengthError);
    }
});
