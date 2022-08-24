// eslint-disable-next-line max-len
import FacilityDetailContentContainer from '@/components/containers/FacilityDetailContentContainer/FacilityDetailContentContainer';
// eslint-disable-next-line max-len
import FacilityDetailHeaderContainer from '@/components/containers/FacilityDetailHeaderContainer/FacilityDetailHeaderContainer';
import { useAppContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Props {}
type Params = {
    id: string;
};
const FacilityDetail: FC<Props> = () => {
    const params = useParams<Params>();
    const store = useAppContext();
    const facility = store.facility.facility;
    useEffect(() => {
        window.scrollTo(0, 0);
        if (params.id) {
            store.facility.getById(params.id);
        }
    }, []);
    const handleItemLike = () => {
        if (facility) {
            facility.isFavourite
                ? store.favoriteFacility
                      .removeFavoriteFacility(facility.id)
                      .then(() => {
                          params.id && store.facility.getById(params.id);
                      })
                : store.favoriteFacility
                      .addFavoriteFacility(facility.id)
                      .then(() => {
                          params.id && store.facility.getById(params.id);
                      });
        }
    };
    return (
        <>
            <FacilityDetailHeaderContainer facility={facility} />
            <FacilityDetailContentContainer
                facility={facility}
                onItemlike={handleItemLike}
            />
        </>
    );
};
export default observer(FacilityDetail);
