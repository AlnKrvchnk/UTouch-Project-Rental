import MapContainer from '@components/containers/MapContainer/MapContainer';
import NavContainer from '@components/containers/NavContainer/NavContainer';
import SearchContainer from '@components/containers/SearchContainer/SearchContainer';
import TagListContainer from '@components/containers/TagListContainer/TagListContainer';
import { StyledAppBar } from './StyledAppBar';
interface Props {
    setShowMap: () => void;
    showMap: boolean;
    search: (value: string | undefined) => void;
}
const AppBar = ({ search, setShowMap, showMap }: Props) => {
    return (
        <>
            <StyledAppBar>
                <NavContainer />
                <SearchContainer
                    onShowMap={setShowMap}
                    search={search}
                    showMap={showMap}
                />
                <TagListContainer />
            </StyledAppBar>
            <MapContainer display={showMap} />
        </>
    );
};
export default AppBar;
