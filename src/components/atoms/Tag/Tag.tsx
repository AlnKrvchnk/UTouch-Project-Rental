import { StyledTag } from './StyledTag';
import clsx from 'clsx';
interface Props {
    children: string;
    isActive: boolean;
    onClick: () => void;
}
const Tag = ({ children, onClick, isActive }: Props) => {
    return (
        <StyledTag className={clsx(isActive && 'active')} onClick={onClick}>
            {children}
        </StyledTag>
    );
};
export default Tag;
