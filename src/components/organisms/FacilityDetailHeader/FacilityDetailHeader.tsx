// eslint-disable-next-line max-len
import FacilityCarouselBoxContainer from '@/components/containers/FacilityCarouselBoxContainer/FacilityCarouselBoxContainer';
import FacilityBriefInformationBox, {
    Props as BriefProps,
} from '@/components/molecules/FacilityBriefInformationBox/FacilityBriefInformationBox';
import { StyledFacilityDetailHeader } from './StyledFacilityDetailHeader';
interface Props extends BriefProps {
    images: string[];
    isDelivered: boolean;
}
const FacilityDetailHeader = ({
    price,
    minPrice,
    square,
    facilityType,
    facilityCount,
    city,
    address,
    district,
    building,
    microDistrict,
    images,
    isDelivered,
}: Props) => {
    return (
        <StyledFacilityDetailHeader>
            <FacilityCarouselBoxContainer
                imagesUrl={images}
                isDelivered={isDelivered}
            />
            <FacilityBriefInformationBox
                price={price}
                minPrice={minPrice}
                square={square}
                facilityType={facilityType}
                facilityCount={facilityCount}
                city={city}
                address={address}
                district={district}
                building={building}
                microDistrict={microDistrict}
            />
        </StyledFacilityDetailHeader>
    );
};
export default FacilityDetailHeader;
