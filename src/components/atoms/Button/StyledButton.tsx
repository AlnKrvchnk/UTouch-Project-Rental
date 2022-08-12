import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export interface Props extends ButtonProps {
    fs?: number;
    fw?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    radius?: number;
}

export const StyledButton = styled(Button)<Props>`
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
    border-radius: '${(props) => props.radius}px';
    text-transform: none;
    ${(props) =>
        props.size === 'large' &&
        `
    padding-top:11px;
    padding-bottom:11px;
    `}
`;
