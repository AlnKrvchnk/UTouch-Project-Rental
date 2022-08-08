import { Props, StyledTextField } from './StyledTextField';

const TextField = ({
    id,
    label,
    variant = 'outlined',
    fullWidth = false,
    placeholder = '',
    hiddenLabel = true,
    dashed = false,
    error = false,
    radius = 8,
    helperText,
    onChange,
    InputProps,
    type,
}: Props) => {
    return (
        <StyledTextField
            id={id}
            label={label}
            variant={variant}
            fullWidth={fullWidth}
            placeholder={placeholder}
            hiddenLabel={hiddenLabel}
            dashed={dashed}
            error={error}
            onChange={onChange}
            radius={radius}
            helperText={helperText}
            InputProps={InputProps}
            type={type}
        ></StyledTextField>
    );
};
export default TextField;
