import FacilityListContainer from '@components/containers/FacilityListContainer/FacilityListContainer';
import FilterChipsContainer from '@components/containers/FilterChipsContainer/FilterChipsContainer';
import FiltersContainer from '@components/containers/FiltersContainer/FiltersContainer';
import SortedContainer from '@components/containers/SortedContainer/SortedContainer';
import { StyledCatalog } from './StyledCatalog';
const Catalog = () => {
    return (
        <StyledCatalog>
            <SortedContainer />
            <FilterChipsContainer />
            <FiltersContainer />
            <FacilityListContainer />
        </StyledCatalog>
    );
};
export default Catalog;
