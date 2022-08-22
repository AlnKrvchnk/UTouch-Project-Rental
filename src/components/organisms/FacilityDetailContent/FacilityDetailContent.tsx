import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityDetailBox from '@/components/atoms/FacilityDetailBox/FacilityDetailBox';
import FacilityCardControls from '@/components/molecules/FacilityCardControls/FacilityCardControls';
import Map from '@components/organisms/Map/Map';
import Typography from '@mui/material/Typography';
import { StyledFacilityDetailContent } from './StyledFacilityDetailContent';
interface Props {
    item?: FacilityInfoDto;
}
const FacilityDetailContent = ({ item }: Props) => {
    return (
        <StyledFacilityDetailContent>
            {item && (
                <Typography
                    className="title"
                    color={'common.black'}
                    sx={{ fontWidth: '500', fontSize: '32px' }}
                >
                    {item.name}
                </Typography>
            )}
            {/* <BenefitLabels className='benefits'/> */}
            {item && (
                <FacilityDetailBox
                    className="general"
                    title={'ddd'}
                    textContent={'dd'}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="owner"
                    title={'ddd'}
                    textContent={'dd'}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="description"
                    title={'Описание'}
                    textContent={item.description}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="controls"
                    elementContent={
                        <FacilityCardControls
                            onCollection={() => {}}
                            onLike={() => {}}
                            isFavorite={false}
                            isCollection={false}
                        />
                    }
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="sales"
                    title={'Акция'}
                    textContent={item.sales.join('\n')}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="commission"
                    title={'Комиссия'}
                    textContent={item.commissions.join('\n')}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="payment"
                    title={'Оплата'}
                    textContent={item.paymentOptions.join('\n')}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="documentation"
                    title={'Документация'}
                    textContent={item.documentNames.join('\n')}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="layout"
                    title={'Планировка'}
                    textContent={item.apartmentLayouts.join('\n')}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="interiorFeatures"
                    title={'Шахматка'}
                    textContent={`${item.checkerboardId}`}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="news"
                    title={'Новости'}
                    textContent={item.news.join('\n')}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="map"
                    title={'Карта'}
                    elementContent={
                        <Map display placemarks={[[item.cX, item.cY]]} />
                    }
                />
            )}
        </StyledFacilityDetailContent>
    );
};
export default FacilityDetailContent;
