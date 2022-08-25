import { styled } from '@mui/material/styles';
export interface Props {
    display: boolean;
    width?: string | number;
    height?: string | number;
}
export const StyledMap = styled('div')<Props>(
    ({ theme, display, width, height }) => ({
        display: display ? 'block' : 'none',
        width: width ? width : '100%',
        height: height ? height : '600px',
    })
);
