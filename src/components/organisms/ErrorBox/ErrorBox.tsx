import { StyledErrorBox, WarningIcon } from './StyledErrorBox';

interface Props {
    children: string;
}

const ErrorBox = ({ children }: Props) => {
    return (
        <StyledErrorBox>
            <WarningIcon />
            {children}
        </StyledErrorBox>
    );
};
export default ErrorBox;
