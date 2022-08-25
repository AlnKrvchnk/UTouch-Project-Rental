import Button from '@/components/atoms/Button/Button';
import { MapIcon } from '@/components/atoms/Icons/Icons';
import MapContainer from '@components/containers/MapContainer/MapContainer';
import NavContainer from '@components/containers/NavContainer/NavContainer';
import SearchContainer from '@components/containers/SearchContainer/SearchContainer';
import TagListContainer from '@components/containers/TagListContainer/TagListContainer';
import { StyledAppBar, StyledBox } from './StyledAppBar';
interface Props {
    setShowMap: () => void;
    isShowMap: boolean;
    onSearch: (value: string | undefined) => void;
}
const AppBar = ({ onSearch, setShowMap, isShowMap }: Props) => {
    return (
        <>
            <StyledAppBar>
                <NavContainer />
                <StyledBox>
                    <Button
                        onClick={setShowMap}
                        variant={isShowMap ? 'contained' : 'outlined'}
                    >
                        <MapIcon />
                    </Button>
                    <SearchContainer onSearch={onSearch} />
                </StyledBox>
                <TagListContainer />
            </StyledAppBar>
            <MapContainer isShow={isShowMap} />
        </>
    );
};
export default AppBar;
