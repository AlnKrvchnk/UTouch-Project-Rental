import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
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
    title: string;
    isDelivered: boolean;
    registrations: FacilityRegistration[];
    address: string;
    count: string;
    pricePerMeter: string;
    imageUrl: string;
    price: string;
    onDetail: () => void;
}

const FacilityInform = ({
    title,
    isDelivered,
    registrations,
    address,
    count,
    imageUrl,
    pricePerMeter,
    price,
    onDetail,
}: Props) => {
    return (
        <StyledFacilityInform>
            <div className="img" onClick={onDetail}>
                <Suspense
                    fallback={
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'100%'}
                        />
                    }
                >
                    <ImageContainer src={imageUrl} title={title} />
                </Suspense>
            </div>
            <div className="inform">
                <div>
                    <Typography
                        variant={'h3'}
                        color={'common.black'}
                        onClick={onDetail}
                        sx={{ cursor: 'pointer' }}
                    >
                        {title}
                    </Typography>
                    <FacilityInformChips
                        isDelivered={isDelivered}
                        registrations={registrations}
                    />
                    <FacilityInformDetail
                        address={address}
                        count={count}
                        pricePerMeter={pricePerMeter}
                    />
                </div>
                <Typography color={'primary'}>{price}</Typography>
            </div>
        </StyledFacilityInform>
    );
};
export default FacilityInform;
