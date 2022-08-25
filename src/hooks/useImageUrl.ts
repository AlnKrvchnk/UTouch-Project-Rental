import { files } from '@/app/api/endpoints';
export const useImageUrl = (value: string | undefined) => {
    return value
        ? `${process.env.REACT_APP_API_URL}${files.getImage(value)}`
        : '';
};
