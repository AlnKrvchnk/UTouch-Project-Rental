import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
import Chip from '@/components/atoms/Chip/Chip';
import temporaryImage from '@assets/images/authPage.jpg';
import { DotsIcon, PlaceIcon } from '@components/atoms/Icons/Icons';
import Typography from '@mui/material/Typography';
import { StyledFacilityInform } from './StyledFacilityInform';

interface Props {
    id: string;
    title: string;
    isDelivered: boolean;
    registrations: FacilityRegistration;
    address: string;
    cottageCount: string;
    pricePerMeter: string;
    price: string;
}

const FacilityInform = ({
    id,
    title,
    isDelivered = true,
    registrations,
    address,
    cottageCount,
    pricePerMeter,
    price,
}: Props) => {
    return (
        <StyledFacilityInform id={id}>
            <div className="img">
                <img src={temporaryImage} alt={title} />
            </div>
            <div className="inform">
                <Typography variant={'h3'} color={'common.black'}>
                    {title}
                </Typography>
                <div className="label">
                    {isDelivered && <Chip color={'info'} label={'Сдан'} />}
                    <Chip color={'primary'} label={registrations} />
                </div>
                <Typography variant={'body2'} color={'text.disabled'}>
                    <Typography color={'grey.900'} sx={{ marginRight: '8px' }}>
                        <PlaceIcon />
                    </Typography>
                    {address}
                </Typography>
                <Typography variant={'body2'} color={'text.disabled'}>
                    <Typography color={'grey.900'} sx={{ marginRight: '8px' }}>
                        <DotsIcon />
                    </Typography>
                    {cottageCount}, {pricePerMeter}
                </Typography>
                <Typography color={'primary'}>{price}</Typography>
            </div>
        </StyledFacilityInform>
    );
};
export default FacilityInform;
