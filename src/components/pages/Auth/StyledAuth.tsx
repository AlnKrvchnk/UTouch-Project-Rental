import styled from 'styled-components';

export const StyledAuth = styled.div`
    & > div {
        position: absolute;
        width: 442px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        & > *:not(:first-child) {
            margin-top: 20px;
        }
    }
`;
