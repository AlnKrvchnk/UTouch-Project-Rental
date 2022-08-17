// eslint-disable-next-line max-len
import FacilityListPaginationContainer from '@components/containers/FacilityListPaginationContainer/FacilityListPaginationContainer';
import FilterChipsContainer from '@components/containers/FilterChipsContainer/FilterChipsContainer';
import FiltersContainer from '@components/containers/FiltersContainer/FiltersContainer';
import SortedContainer from '@components/containers/SortedContainer/SortedContainer';
import { StyledCatalog } from './StyledCatalog';
// const FacilityListContainer = lazy(
//     () =>
//         import(
//             '@components/containers/FacilityListContainer/FacilityListContainer'
//         )
// );
const Catalog = () => {
    return (
        <StyledCatalog>
            <SortedContainer />
            <FilterChipsContainer />
            <FiltersContainer />
            <FacilityListPaginationContainer />
        </StyledCatalog>
    );
};
export default Catalog;
