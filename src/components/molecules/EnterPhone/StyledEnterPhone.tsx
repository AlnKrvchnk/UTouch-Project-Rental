import styled from 'styled-components';

const StyledEnterPhone = styled.div`
    & > *:not(:first-child) {
        margin-left: 8px;
        width: min-width;
    }
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input[type='number'],
    input[type='number']:hover,
    input[type='number']:focus {
        appearance: none;
        -moz-appearance: textfield;
    }
`;

export default StyledEnterPhone;
