import backgroundImage from '@assets/images/authPage.jpg';
import styled from 'styled-components';

export const StyledAuth = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${backgroundImage});
    background-size: cover;
    min-height: 100vh;
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
