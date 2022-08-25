import { useImageUrl } from '@/hooks/useImageUrl';
import { StyledApartmentLayoutsImg } from './StyledApartmentLayoutsImg';
interface Props {
    imageUrl: string;
    onZoomImage: () => void;
}
const ApartmentLayoutsImg = ({ imageUrl, onZoomImage }: Props) => {
    const image = useImageUrl(imageUrl);
    return (
        <StyledApartmentLayoutsImg>
            <img
                src={image}
                onClick={onZoomImage}
                alt={'Изображение не найдено'}
            />
        </StyledApartmentLayoutsImg>
    );
};
export default ApartmentLayoutsImg;
