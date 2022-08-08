import styled from 'styled-components';

export const StyledAuthForm = styled.form`
    position: absolute;
    width: 442px;
    display: grid;
    padding: 32px;
    box-shadow: 0px 4px 6px -2px rgba(100, 116, 139, 0.05),
        0px 10px 15px -3px rgba(100, 116, 139, 0.12);
    border-radius: 8px;
    background: #ffffff;
    text-align: center;
    & > *:not(:first-child) {
        margin-top: 24px;
    }
    & > hr {
        width: 100%;
        color: #e6e8f0;
    }
`;
