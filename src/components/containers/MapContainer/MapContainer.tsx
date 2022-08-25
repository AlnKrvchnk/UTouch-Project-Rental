import { useAppContext } from '@/contexts/StoreContext';
import Map, { Placemark } from '@components/organisms/Map/Map';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
interface Props {
    isShow: boolean;
}
const MapContainer = ({ isShow }: Props) => {
    const store = useAppContext();
    const facilities = store.facility.data;
    const [placemarks, setPlacemarks] = useState<Placemark[]>([]);
    useEffect(() => {
        if (isShow && facilities) {
            const tmp = facilities.map((facility) => ({
                title: facility.name,
                marks: [facility.cX, facility.cY],
            }));
            setPlacemarks(tmp);
        }
    }, [isShow, facilities]);
    return <Map placemarks={placemarks} display={isShow} />;
};
export default observer(MapContainer);
