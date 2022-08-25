import { DotsIcon, PlaceIcon } from '@/components/atoms/Icons/Icons';
import { Typography } from '@mui/material';
import { StyledFacilityInformDetail } from './StyledFacilityInformDetail';
interface Props {
    address: string;
    count: string;
    pricePerMeter: string;
}
const FacilityInformDetail = ({ address, count, pricePerMeter }: Props) => {
    return (
        <StyledFacilityInformDetail>
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
                {count}, {pricePerMeter}
            </Typography>
        </StyledFacilityInformDetail>
    );
};
export default FacilityInformDetail;
