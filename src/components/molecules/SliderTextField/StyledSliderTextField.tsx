import { styled } from '@mui/material/styles';

export const StyledSliderTextField = styled('div')(({ theme }) => ({
    "input[type='number'], input[type='number']:hover, input[type='number']:focus":
        {
            appearance: 'none',
        },
    "input[type='number']::-webkit-outer-spin-button,input[type='number']::-webkit-inner-spin-button":
        {
            '-webkit-appearance': 'none',
        },

    '&>*:last-child': {
        marginTop: 16,
        display: 'grid',
        gridColumnGap: 10,
        gridTemplateColumns: '1fr 1fr',
        '& >*>*': {
            height: 40,
        },
    },
}));
