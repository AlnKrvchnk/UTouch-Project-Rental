import { StyledTag } from './StyledTag';
interface Props {
    children: string;
    isActive: boolean;
    onClick: () => void;
}
const Tag = ({ children, onClick, isActive }: Props) => {
    return (
        <StyledTag className={isActive ? 'active' : ''} onClick={onClick}>
            {children}
        </StyledTag>
    );
};
export default Tag;
