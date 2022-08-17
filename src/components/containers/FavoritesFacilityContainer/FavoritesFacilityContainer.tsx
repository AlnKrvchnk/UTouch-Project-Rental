import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import { useAppContext } from '@/contexts/StoreContext';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import FacilityListContainer from '../FacilityListContainer/FacilityListContainer';

const FavoritesFacilityContainer = () => {
    const store = useAppContext();
    const isLoad = store.favoriteFacility.isLoad;
    const [favoritesList, setFavoritesList] = useState<FacilityInfoDto[]>([]);
    useEffect(() => {
        store.favoriteFacility.getFavoriteFacility();
    }, []);
    useEffect(() => {
        if (isLoad) {
            setFavoritesList(toJS(store.favoriteFacility.facility));
        }
    }, [isLoad]);
    useEffect(() => {
        console.log(favoritesList);
    }, [favoritesList]);

    return <FacilityListContainer itemsList={favoritesList} />;
};
export default observer(FavoritesFacilityContainer);
