import { lengthError } from '@/app/types/Error/PhoneNumberError';

function formatedPhone(value: string, format: string): string {
    let tmp = '';
    if (value.length < format.length) {
        for (let i = 0, j = 0; i < value.length && j < format.length; i++) {
            if (value[i] === format[j]) {
                tmp += value[i];
            } else if (format[j] === '0' && value[i].match(/\d/g)) {
                tmp += value[i];
            } else if (format[j] === '0' && !value[i].match(/\d/g)) {
                i++;
                j--;
            } else {
                do {
                    tmp += format[j];
                    j++;
                } while (format[j] !== '0' && format[j] !== value[i]);
                tmp += value[i];
            }
            j++;
        }
    } else throw lengthError;
    return tmp;
}
export default formatedPhone;
