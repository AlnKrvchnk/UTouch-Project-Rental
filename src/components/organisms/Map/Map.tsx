import { Map as MapComponent, Placemark, YMaps } from 'react-yandex-maps';
import { Props as StyledProps, StyledMap } from './StyledMap';
interface Props extends StyledProps {
    placemarks: Array<Array<number>>;
}
const Map = ({ placemarks, display, width, height }: Props) => (
    <StyledMap display={display} width={width} height={height}>
        <YMaps>
            <div>
                <MapComponent
                    defaultState={{
                        center: placemarks[0] || [50, 50],
                        zoom: 9,
                    }}
                    width={'100%'}
                    height={height || '600px'}
                >
                    {placemarks.map((placemark) => (
                        <Placemark
                            key={placemark.join('-')}
                            geometry={placemark}
                        />
                    ))}
                </MapComponent>
            </div>
        </YMaps>
    </StyledMap>
);
export default Map;
