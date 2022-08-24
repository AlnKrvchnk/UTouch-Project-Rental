import { StyledApartmentLayoutsImg } from './StyledApartmentLayoutsImg';
interface Props {
    imgUrl: string;
    showImg: () => void;
}
const ApartmentLayoutsImg = ({ imgUrl, showImg }: Props) => {
    return (
        <StyledApartmentLayoutsImg>
            <img
                src={imgUrl}
                onClick={showImg}
                alt={''}
            />
        </StyledApartmentLayoutsImg>
    );
};
export default ApartmentLayoutsImg;
