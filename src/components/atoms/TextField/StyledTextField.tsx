import { styled } from '@mui/material/styles';
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField';

export interface Props extends OutlinedTextFieldProps {
    dashed?: boolean;
    radius?: number;
}

export const StyledTextField = styled(TextField)<Props>`
    min-width: 56px;
    fieldset {
        ${(props) => props.dashed && `border-style: dashed;`}
        border-radius:${(props) => props.radius}px;
    }
    input {
        padding: 16px 12px;
        font-size: 16px;
        font-weight: 400;
        text-align: inherit;
        &::placeholder {
            font-size: 16px;
            font-weight: 400;
        }
    }
`;
