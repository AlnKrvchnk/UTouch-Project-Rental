import NavItem from '@/components/atoms/NavItem/NavItem';
import { Paths } from '@/routes/Paths';
import { StyledNavList } from './StyledNavList';
interface Props {
    pages: { link: Paths; content: () => JSX.Element }[];
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
