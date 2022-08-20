import { Props as TextFieldProps, StyledTextField } from './StyledTextField';

interface Props extends TextFieldProps {
    dataIndex?: number;
}

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
    onSubmit,
    onClick,
    InputProps,
    type,
    ref,
    autoFocus,
    inputRef,
    onKeyDown,
    value,
    disabled,
    color,
}: Props) => {
    return (
        <StyledTextField
            color={color}
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
            onClick={onClick}
            onSubmit={onSubmit}
            ref={ref}
            autoFocus={autoFocus}
            inputRef={inputRef}
            onKeyDown={onKeyDown}
            value={value}
            disabled={disabled}
        ></StyledTextField>
    );
};
export default TextField;
