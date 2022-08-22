import FacilityDetailContent from '@/components/organisms/FacilityDetailContent/FacilityDetailContent';
import { useAppContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
interface Props {
    id?: string;
}
const FacilityDetailContentContainer = ({ id }: Props) => {
    const store = useAppContext();
    const facility = store.facility.facility;
    useEffect(() => {
        if (id) {
            console.log(id);
            store.facility.getById(id);
        }
    }, []);
    return <FacilityDetailContent item={facility} />;
};
export default observer(FacilityDetailContentContainer);
