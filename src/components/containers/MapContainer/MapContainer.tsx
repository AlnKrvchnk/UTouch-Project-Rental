import { useAppContext } from '@/contexts/StoreContext';
import Map from '@components/organisms/Map/Map';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
interface Props {
    display: boolean;
}
const MapContainer = ({ display }: Props) => {
    const store = useAppContext();
    const isLoad = store.facility.isLoad;
    const facilities = store.facility.data;
    const [placemarks, setPlacemarks] = useState<Array<Array<number>>>([]);
    useEffect(() => {
        console.log(display && isLoad);
        if (display && isLoad) {
            const tmp = facilities.map((facility) => [
                facility.cX,
                facility.cY,
            ]);
            setPlacemarks(tmp);
        }
    }, [display, facilities]);
    return <Map placemarks={placemarks} display={display} />;
};
export default observer(MapContainer);
