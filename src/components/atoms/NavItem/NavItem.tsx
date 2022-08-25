import { NavLinkProps } from 'react-router-dom';
import { StyledNavItem } from './StyledNavItem';
const NavItem = ({ to, children }: NavLinkProps) => {
    return <StyledNavItem to={to}>{children}</StyledNavItem>;
};
export default NavItem;
