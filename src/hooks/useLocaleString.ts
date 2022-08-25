export const useLocaleString = (value: number | undefined) => {
    return value ? value.toLocaleString() : '0';
};
