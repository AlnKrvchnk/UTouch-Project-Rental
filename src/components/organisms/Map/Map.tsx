import { Map as MapComponent, Placemark, YMaps } from 'react-yandex-maps';
import { Props as StyledProps, StyledMap } from './StyledMap';
interface Props extends StyledProps {
    placemarks: { title: string; marks: number[] }[];
}

const Map = ({ placemarks, display, width, height }: Props) => (
    <StyledMap display={display} width={width} height={height}>
        <YMaps>
            <div>
                <MapComponent
                    defaultState={{
                        center: placemarks[0] ? placemarks[0].marks : [50, 50],
                        zoom: 9,
                    }}
                    width={'100%'}
                    height={height || '600px'}
                >
                    {placemarks.map((placemark) => (
                        <Placemark
                            properties={{
                                hintContent: placemark.title,
                                balloonContent: placemark.title,
                            }}
                            key={placemark.marks.join('-')}
                            geometry={placemark.marks}
                            modules={[
                                'geoObject.addon.balloon',
                                'geoObject.addon.hint',
                            ]}
                        />
                    ))}
                </MapComponent>
            </div>
        </YMaps>
    </StyledMap>
);
export default Map;
