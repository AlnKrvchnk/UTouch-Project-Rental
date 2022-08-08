import { Props, StyledButton } from './StyledButton';

const Button = ({
    children = 'Press',
    color = 'primary',
    variant = 'contained',
    size,
    onClick,
    disableElevation = true,
    disabled = false,
    fullWidth = false,
    fs = 15,
    fw = 600,
    radius = 8,
}: Props) => {
    return (
        <StyledButton
            size={size}
            disableElevation={disableElevation}
            disabled={disabled}
            onClick={onClick}
            variant={variant}
            color={color}
            fullWidth={fullWidth}
            fs={fs}
            fw={fw}
            radius={radius}
        >
            {children}
        </StyledButton>
    );
};
export default Button;
