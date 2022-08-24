import Typography from '@mui/material/Typography';
import { StyledFacilityBriefInformationBox } from './StyledFacilityBriefInformationBox';
export interface Props {
    price: string;
    minPrice: string;
    square: string;
    facilityType: string;
    facilityCount: string;
    city: string;
    address: string;
    district: string;
    building: string;
    microDistrict: string;
}
const FacilityBriefInformationBox = ({
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
}: Props) => {
    return (
        <StyledFacilityBriefInformationBox>
            <div>
                <Typography
                    sx={{ fontWeight: '300', fontSize: '14px' }}
                    color={'common.black'}
                >
                    Цена за м²
                </Typography>
                <Typography variant={'h4'} color={'common.black'} title={price}>
                    {price}
                </Typography>
            </div>
            <div>
                <Typography
                    sx={{ fontWeight: '300', fontSize: '14px' }}
                    color={'common.black'}
                >
                    Мин. цена
                </Typography>
                <Typography
                    variant={'h4'}
                    color={'common.black'}
                    title={minPrice}
                >
                    {minPrice}
                </Typography>
            </div>
            <div>
                <Typography
                    sx={{ fontWeight: '300', fontSize: '14px' }}
                    color={'common.black'}
                >
                    Площади, м²
                </Typography>
                <Typography
                    variant={'h4'}
                    color={'common.black'}
                    title={square}
                >
                    {square}
                </Typography>
            </div>
            <div>
                <Typography
                    sx={{ fontWeight: '300', fontSize: '14px' }}
                    color={'common.black'}
                >
                    {facilityType}
                </Typography>
                <Typography
                    variant={'h4'}
                    color={'common.black'}
                    title={facilityCount}
                >
                    {facilityCount}
                </Typography>
            </div>
            <div>
                <Typography
                    sx={{ fontWeight: '300', fontSize: '14px' }}
                    color={'common.black'}
                >
                    Город
                </Typography>
                <Typography variant={'h4'} color={'common.black'} title={city}>
                    {city}
                </Typography>
            </div>
            <div>
                <Typography
                    sx={{ fontWeight: '300', fontSize: '14px' }}
                    color={'common.black'}
                >
                    Адрес
                </Typography>
                <Typography
                    variant={'h4'}
                    color={'common.black'}
                    title={address}
                >
                    {address}
                </Typography>
            </div>
            <div>
                <Typography
                    sx={{ fontWeight: '300', fontSize: '14px' }}
                    color={'common.black'}
                >
                    Район
                </Typography>
                <Typography
                    variant={'h4'}
                    color={'common.black'}
                    title={district}
                >
                    {district}
                </Typography>
            </div>
            <div>
                <Typography
                    sx={{ fontWeight: '300', fontSize: '14px' }}
                    color={'common.black'}
                >
                    Корпус
                </Typography>
                <Typography
                    variant={'h4'}
                    color={'common.black'}
                    title={building}
                >
                    {building}
                </Typography>
            </div>
            <div>
                <Typography
                    sx={{ fontWeight: '300', fontSize: '14px' }}
                    color={'common.black'}
                >
                    Микрорайон
                </Typography>
                <Typography
                    variant={'h4'}
                    color={'common.black'}
                    title={microDistrict}
                >
                    {microDistrict}
                </Typography>
            </div>
        </StyledFacilityBriefInformationBox>
    );
};
export default FacilityBriefInformationBox;
