import NavContainer from '@components/containers/NavContainer/NavContainer';
import SearchContainer from '@components/containers/SearchContainer/SearchContainer';
import TagListContainer from '@components/containers/TagListContainer/TagListContainer';
import { StyledAppBar } from './StyledAppBar';
interface Props {
    showMap: () => void;
    search: (value: string) => void;
}
const AppBar = ({ showMap, search }: Props) => {
    return (
        <StyledAppBar>
            <NavContainer />
            <SearchContainer showMap={showMap} search={search} />
            <TagListContainer />
        </StyledAppBar>
    );
};
export default AppBar;
