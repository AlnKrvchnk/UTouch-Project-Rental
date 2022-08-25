import {
    CollectionsIcon,
    LikeIcon,
    NewsIcon,
    UserIcon,
} from '@/components/atoms/Icons/Icons';
import Logo from '@/components/atoms/Logo/Logo';
import NavItem from '@/components/atoms/NavItem/NavItem';
import NavList, { Page } from '@/components/molecules/NavList/NavList';
import { Paths } from '@/routes/Paths';
import { StyledNavContainer } from './StyledNavContainer';

const Collections = () => {
    return (
        <span>
            <CollectionsIcon />
            Подборки
        </span>
    );
};
const News = () => {
    return (
        <span>
            <NewsIcon />
            Новости
        </span>
    );
};
const Favorites = () => {
    return (
        <span>
            <LikeIcon />
            Избранное
        </span>
    );
};
const User = () => {
    return (
        <span>
            <UserIcon />
            Личный кабинет
        </span>
    );
};

const NavContainer = () => {
    const pages: Page[] = [
        { link: Paths.News, content: News },
        { link: Paths.Collections, content: Collections },
        { link: Paths.Favorites, content: Favorites },
        { link: Paths.User, content: User },
    ];
    return (
        <StyledNavContainer>
            <NavItem to={Paths.Catalog}>
                <Logo />
            </NavItem>

            <NavList pages={pages} />
        </StyledNavContainer>
    );
};
export default NavContainer;
