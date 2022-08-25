import { GetAllPagFacilityDto } from '@/app/types/Facility/GetAllPagFacilityDto';
import { FacilityCategory } from '@/app/types/Filter/FacilityCategory';
import { ReadFilterDto } from '@/app/types/Filter/ReadFilterDto';
import { SortBy } from '@/app/types/Filter/SortBy';
import { useAppContext } from '@/contexts/StoreContext';
import PaginationContainer from '@components/containers/PaginationContainer/PaginationContainer';
import { StyledFacilityCard } from '@components/organisms/FacilityCard/StyledFacilityCard';
import { Paths } from '@routes/Paths';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FacilityListContainer from '../FacilityListContainer/FacilityListContainer';

const FacilityListPaginationContainer = () => {
    const store = useAppContext();
    const pageCount = store.facility.totalPageCount;
    const [page, setPage] = useState<number>(1);
    const filter: ReadFilterDto = store.filter.selectFilter;
    const category: string | undefined = store.filter.category;
    const sortBy: string | undefined = store.filter.sortBy;
    const search: string | undefined = store.filter.search;
    const itemsList = store.facility.data;
    const isLoad = store.facility.isLoad;
    const navigate = useNavigate();

    const updateitemList = () => {
        const actualFilter: GetAllPagFacilityDto = { ...filter };
        actualFilter.page = page;
        if (category) actualFilter.category = category as FacilityCategory;
        if (sortBy) actualFilter.sort = sortBy as SortBy;
        if (search) actualFilter.searchQuery = search;
        store.facility.getAllPag(actualFilter);
    };
    const handleItemLike = (id: string) => {
        if (itemsList) {
            for (let index = 0; index < itemsList.length; index++) {
                if (itemsList[index].id === id) {
                    itemsList[index].isFavourite
                        ? store.favoriteFacility
                              .removeFavoriteFacility(id)
                              .then(() => updateitemList())
                        : store.favoriteFacility
                              .addFavoriteFacility(id)
                              .then(() => updateitemList());
                }
            }
        }
    };
    const handleItemCollection = (id: string) => {
        console.log(id);
    };
    const handleItemDetail = (id: string) => {
        navigate(`${Paths.Catalog}/${id}`, { replace: true });
    };
    useEffect(() => {
        updateitemList();
    }, [page, category, sortBy, filter, search]);
    return (
        <div>
            <FacilityListContainer
                itemsList={itemsList}
                onItemLike={(id) => handleItemLike(id)}
                onItemCollection={(id) => handleItemCollection(id)}
                onItemDetail={(id) => handleItemDetail(id)}
            />
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
