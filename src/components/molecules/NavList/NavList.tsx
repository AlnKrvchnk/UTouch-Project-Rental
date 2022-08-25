import NavItem from '@/components/atoms/NavItem/NavItem';
import { Paths } from '@/routes/Paths';
import { StyledNavList } from './StyledNavList';
export interface Page {
    link: Paths;
    content: () => JSX.Element;
}
interface Props {
    pages: Page[];
}

const NavList = ({ pages }: Props) => {
    return (
        <StyledNavList>
            {pages.map((page) => (
                <NavItem to={page.link} key={`nav:${page.link}`}>
                    {page.content}
                </NavItem>
            ))}
        </StyledNavList>
    );
};
export default NavList;
