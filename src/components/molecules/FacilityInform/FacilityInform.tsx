import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
// import ImageContainer from '@/components/containers/ImageContainer/ImageContainer';
import FacilityInformChips from '@components/molecules/FacilityInformChips/FacilityInformChips';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { lazy, Suspense } from 'react';
import FacilityInformDetail from '../FacilityInformDetail/FacilityInformDetail';
import { StyledFacilityInform } from './StyledFacilityInform';
const ImageContainer = lazy(
    () => import('@/components/containers/ImageContainer/ImageContainer')
);
interface Props {
    id: string;
    title: string;
    isDelivered: boolean;
    registrations: FacilityRegistration[];
    address: string;
    cottageCount: string;
    pricePerMeter: string;
    image: string[];
    price: string;
}

const FacilityInform = ({
    id,
    title,
    isDelivered,
    registrations,
    address,
    cottageCount,
    image,
    pricePerMeter,
    price,
}: Props) => {
    return (
        <StyledFacilityInform>
            <div className="img">
                <Suspense
                    fallback={
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'100%'}
                        />
                    }
                >
                    <ImageContainer src={image} title={title} />
                </Suspense>
            </div>
            <div className="inform">
                <div>
                    <Typography variant={'h3'} color={'common.black'}>
                        {title}
                    </Typography>
                    <FacilityInformChips
                        isDelivered={isDelivered}
                        registrations={registrations}
                    />
                    <FacilityInformDetail
                        address={address}
                        cottageCount={cottageCount}
                        pricePerMeter={pricePerMeter}
                    />
                </div>
                <Typography color={'primary'}>{price}</Typography>
            </div>
        </StyledFacilityInform>
    );
};
export default FacilityInform;
