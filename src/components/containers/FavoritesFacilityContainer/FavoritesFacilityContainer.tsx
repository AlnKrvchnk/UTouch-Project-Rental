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

    const handleItemLike = (id: string) => {
        store.favoriteFacility
            .removeFavoriteFacility(id)
            .then(() => store.favoriteFacility.getFavoriteFacility());
    };
    const handleItemCollection = (id: string) => {
        console.log(id);
    };
    useEffect(() => {
        store.favoriteFacility.getFavoriteFacility();
    }, []);

    useEffect(() => {
        if (isLoad) {
            const favoriteFacilityInfo = toJS(store.favoriteFacility.favorites);
            setFavoritesList(favoriteFacilityInfo.map((item) => item.facility));
        }
    }, [isLoad]);

    return (
        <FacilityListContainer
            itemsList={toJS(store.favoriteFacility.favorites).map(
                (item) => item.facility
            )} //Почему здесь не обновляется useEffect????
            onItemLike={(id) => handleItemLike(id)}
            onItemCollection={(id) => handleItemLike(id)}
        />
    );
};
export default observer(FavoritesFacilityContainer);
