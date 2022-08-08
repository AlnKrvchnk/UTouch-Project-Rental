import styled from 'styled-components';

const StyledEnterCode = styled.div`
    display: flex;
    & > *:not(:first-child) {
        margin-left: 8px;
    }
`;

export default StyledEnterCode;
