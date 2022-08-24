// eslint-disable-next-line max-len
import FacilityListPaginationContainer from '@components/containers/FacilityListPaginationContainer/FacilityListPaginationContainer';
import FilterChipsContainer from '@components/containers/FilterChipsContainer/FilterChipsContainer';
import FiltersContainer from '@components/containers/FiltersContainer/FiltersContainer';
import SortedContainer from '@components/containers/SortedContainer/SortedContainer';
import { useEffect } from 'react';
import { StyledCatalog } from './StyledCatalog';

const Catalog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
