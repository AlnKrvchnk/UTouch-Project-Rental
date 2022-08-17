/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import { GetAllPagFacilityDto } from '@/app/types/Facility/GetAllPagFacilityDto';
import { FacilityCategory } from '@/app/types/Filter/FacilityCategory';
import { ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import { SortBy } from '@/app/types/Filter/SortBy';
import { useAppContext } from '@/contexts/StoreContext';
import PaginationContainer from '@components/containers/PaginationContainer/PaginationContainer';
import { StyledFacilityCard } from '@components/organisms/FacilityCard/StyledFacilityCard';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import FacilityListContainer from '../FacilityListContainer/FacilityListContainer';

const FacilityListPaginationContainer = () => {
    const store = useAppContext();
    const pageCount = store.facility.limit;
    const isLoad = store.facility.isLoad;
    const [page, setPage] = useState<number>(1);
    const filter: ReadFilterDto = store.filter.selectFilter;
    const category: string | undefined = store.filter.category;
    const sortBy: string | undefined = store.filter.sortBy;
    const itemsList = store.facility.data;

    const handleItemLike = (id: string) => {
        console.log(0);
    };
    useEffect(() => {
        const actualFilter: GetAllPagFacilityDto = { ...filter };
        actualFilter.page = page;
        if (category) actualFilter.category = category as FacilityCategory;
        if (sortBy) actualFilter.sort = sortBy as SortBy;
        store.facility.getAllPag(actualFilter);
    }, [page, category, sortBy, filter]);
    return (
        <div>
            <FacilityListContainer itemsList={itemsList} />
            <StyledFacilityCard>
                <PaginationContainer
                    pageCount={pageCount || 0}
                    page={page}
                    setPage={(page) => setPage(page)}
                />
            </StyledFacilityCard>
        </div>
    );
};
export default observer(FacilityListPaginationContainer);
