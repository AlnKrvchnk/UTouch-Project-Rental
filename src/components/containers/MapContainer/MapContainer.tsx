import { useAppContext } from '@/contexts/StoreContext';
import Map from '@components/organisms/Map/Map';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
interface Props {
    display: boolean;
}
const MapContainer = ({ display }: Props) => {
    const store = useAppContext();
    const facilities = store.facility.data;
    const [placemarks, setPlacemarks] = useState<
        { title: string; marks: number[] }[]
    >([]);
    useEffect(() => {
        if (display && facilities) {
            const tmp = facilities.map((facility) => ({
                title: facility.name,
                marks: [facility.cX, facility.cY],
            }));
            setPlacemarks(tmp);
        }
    }, [display, facilities]);
    return <Map placemarks={placemarks} display={display} />;
};
export default observer(MapContainer);
