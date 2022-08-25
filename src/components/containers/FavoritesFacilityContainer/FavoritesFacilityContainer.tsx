import PseudoFacilityCard from '@/components/organisms/PseudoFacilityCard/PseudoFacilityCard';
import { useAppContext } from '@/contexts/StoreContext';
import { Paths } from '@/routes/Paths';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FacilityListContainer from '../FacilityListContainer/FacilityListContainer';

const FavoritesFacilityContainer = () => {
    const store = useAppContext();
    const favorites = store.favoriteFacility.favorites;
    const navigate = useNavigate();
    const handleItemLike = (id: string) => {
        store.favoriteFacility
            .removeFavoriteFacility(id)
            .then(() => store.favoriteFacility.getFavoriteFacility());
    };
    const handleItemCollection = (id: string) => {
        console.log(id);
    };
    const handleItemDetail = (id: string) => {
        navigate(`${Paths.Catalog}/${id}`, { replace: true });
    };
    useEffect(() => {
        store.favoriteFacility.getFavoriteFacility();
    }, []);

    return favorites ? (
        <FacilityListContainer
            itemsList={toJS(favorites).map((item) => item.facility)}
            onItemLike={(id) => handleItemLike(id)}
            onItemCollection={(id) => handleItemLike(id)}
            onItemDetail={(id) => handleItemDetail(id)}
        />
    ) : (
        <PseudoFacilityCard />
    );
};
export default observer(FavoritesFacilityContainer);
