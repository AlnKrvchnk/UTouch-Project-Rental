import { files } from '@/app/api/endpoints';

export const useImageArrayUrl = (value: string[]) => {
    return value.map(
        (item) => `${process.env.REACT_APP_API_URL}${files.getImage(item)}`
    );
};
