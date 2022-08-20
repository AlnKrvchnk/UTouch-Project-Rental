/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import { GetAllPagFacilityDto } from '@/app/types/Facility/GetAllPagFacilityDto';
import { FacilityCategory } from '@/app/types/Filter/FacilityCategory';
import { ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import { SortBy } from '@/app/types/Filter/SortBy';
import PseudoFacilityCard from '@/components/organisms/PseudoFacilityCard/PseudoFacilityCard';
import { useAppContext } from '@/contexts/StoreContext';
import PaginationContainer from '@components/containers/PaginationContainer/PaginationContainer';
import { StyledFacilityCard } from '@components/organisms/FacilityCard/StyledFacilityCard';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import FacilityListContainer from '../FacilityListContainer/FacilityListContainer';

const FacilityListPaginationContainer = () => {
    const store = useAppContext();
    const pageCount = store.facility.totalPageCount;
    const isLoad = store.facility.isLoad;
    const [page, setPage] = useState<number>(1);
    const filter: ReadFilterDto = store.filter.selectFilter;
    const category: string | undefined = store.filter.category;
    const sortBy: string | undefined = store.filter.sortBy;
    const search: string | undefined = store.filter.search;
    const itemsList = store.facility.data;

    const updateitemList = () => {
        const actualFilter: GetAllPagFacilityDto = { ...filter };
        actualFilter.page = page;
        if (category) actualFilter.category = category as FacilityCategory;
        if (sortBy) actualFilter.sort = sortBy as SortBy;
        if (search) actualFilter.searchQuery = search;
        store.facility.getAllPag(actualFilter);
    };
    const handleItemLike = (id: string) => {
        for (let index = 0; index < itemsList.length; index++) {
            if (itemsList[index].id === id) {
                console.log(itemsList[index].isFavourite);
                itemsList[index].isFavourite
                    ? store.favoriteFacility
                          .removeFavoriteFacility(id)
                          .then(() => updateitemList()) //<- это правильно?
                    : store.favoriteFacility
                          .addFavoriteFacility(id)
                          .then(() => updateitemList());
            }
        }
    };
    const handleItemCollection = (id: string) => {
        console.log(id);
    };
    useEffect(() => {
        updateitemList();
    }, [page, category, sortBy, filter, search]);
    return (
        <div>
            {isLoad ? (
                <FacilityListContainer
                    itemsList={itemsList}
                    onItemLike={(id) => handleItemLike(id)}
                    onItemCollection={(id) => handleItemCollection(id)}
                />
            ) : (
                <>
                    <PseudoFacilityCard />
                    <PseudoFacilityCard />
                    <PseudoFacilityCard />
                </>
            )}
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
