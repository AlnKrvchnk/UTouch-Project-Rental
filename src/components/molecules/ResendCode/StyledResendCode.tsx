import styled from 'styled-components';

export const StyledResendCode = styled.div`
    display: flex;
    & > *:first-child {
        cursor: pointer;
    }
    & > *:not(:first-child) {
        margin-left: 16px;
    }
`;
