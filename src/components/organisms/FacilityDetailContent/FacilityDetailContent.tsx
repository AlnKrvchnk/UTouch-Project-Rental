import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityDetailBox from '@/components/atoms/FacilityDetailBox/FacilityDetailBox';
import BenefitsList from '@/components/molecules/BenefitsList/BenefitsList';
import FacilityGeneralList from '@/components/molecules/FacilityGeneralList/FacilityGeneralList';
// eslint-disable-next-line max-len
import DeveloperInformSmallCard from '@/components/molecules/DeveloperInformSmallCard/DeveloperInformSmallCard';
import FacilityCardControls from '@/components/molecules/FacilityCardControls/FacilityCardControls';
import FacilityCommissionsList from '@/components/molecules/FacilityCommissionsList/FacilityCommissionsList';
// eslint-disable-next-line max-len
import FacilityPaymentOptionsList from '@/components/molecules/FacilityPaymentOptionsList/FacilityPaymentOptionsList';
import FacilitySalesList from '@/components/molecules/FacilitySalesList/FacilitySalesList';
import DocumentsItem from '@components/atoms/DocumentsItem/DocumentsItem';
// eslint-disable-next-line max-len
import ApartmentLayoutsImgContainer from '@components/containers/ApartmentLayoutsImgContainer/ApartmentLayoutsImgContainer';
import Map from '@components/organisms/Map/Map';
import NewsSmallCardList from '@components/organisms/NewsSmallCardList/NewsSmallCardList';
import Typography from '@mui/material/Typography';
import { StyledFacilityDetailContent } from './StyledFacilityDetailContent';
// eslint-disable-next-line max-len
import PseudoFacilityDetailContent from '@components/organisms/PseudoFacilityDetailContent/PseudoFacilityDetailContent';
interface Props {
    item?: FacilityInfoDto;
    onItemLike: () => void;
    onItemCollection: () => void;
}
const FacilityDetailContent = ({
    item,
    onItemLike,
    onItemCollection,
}: Props) => {
    return (
        <StyledFacilityDetailContent>
            {item ? (
                <>
                    <Typography
                        className="title"
                        color={'common.black'}
                        sx={{ fontWidth: '500', fontSize: '32px' }}
                    >
                        {item.name}
                    </Typography>
                    <BenefitsList
                        benefitsList={item.benefits}
                        className={'benefits'}
                    />

                    <FacilityDetailBox
                        className="general"
                        elementContent={
                            <FacilityGeneralList
                                houseClass={item.houseClass}
                                material={item.material}
                                facilityType={item.facilityType}
                                parking={item.parking}
                                territory={item.territory}
                                ceilingHeight={item.ceilingHeight}
                                distanceToTheBeach={
                                    item.distanceToTheBeach || 0
                                }
                                communications={item.communications}
                                registrations={item.registrations}
                                price={item.price}
                            />
                        }
                    />

                    <FacilityDetailBox
                        className="owner"
                        elementContent={
                            <DeveloperInformSmallCard
                                developerAvatarUrl={item.developerAvatar}
                                developerName={item.developerName}
                            />
                        }
                    />
                    <FacilityDetailBox
                        className="description"
                        title={'Описание'}
                        textContent={item.description}
                    />
                    <FacilityDetailBox
                        className="controls"
                        elementContent={
                            <FacilityCardControls
                                onCollection={onItemCollection}
                                onLike={onItemLike}
                                isFavorite={item.isFavourite}
                                isCollection={false}
                            />
                        }
                    />
                    <FacilityDetailBox
                        className="sales"
                        title={'Акция'}
                        elementContent={
                            <FacilitySalesList salesList={item.sales} />
                        }
                    />
                    <FacilityDetailBox
                        className="commissions"
                        title={'Комиссия'}
                        elementContent={
                            <FacilityCommissionsList
                                commissionsList={item.commissions}
                            />
                        }
                    />
                    <FacilityDetailBox
                        className="payment"
                        title={'Оплата'}
                        elementContent={
                            <FacilityPaymentOptionsList
                                installmentPlanOptions={
                                    item.installmentPlanOptions
                                }
                                paymentOptions={item.paymentOptions}
                            />
                        }
                    />
                    <FacilityDetailBox
                        className="documentation"
                        title={'Документация'}
                        elementContent={
                            <>
                                {item.documents.map((document) => (
                                    <DocumentsItem
                                        key={document.id}
                                        path={document.path}
                                        fileName={document.filename}
                                    />
                                ))}
                            </>
                        }
                    />
                    <FacilityDetailBox
                        className="layout"
                        title={'Планировка'}
                        elementContent={
                            <ApartmentLayoutsImgContainer
                                imgsUrl={item.apartmentLayouts}
                            />
                        }
                    />
                    <FacilityDetailBox
                        className="interiorFeatures"
                        title={'Шахматка'}
                        textContent={`${item.checkerboardId}`}
                    />
                    <FacilityDetailBox
                        className="news"
                        title={'Новости'}
                        elementContent={<NewsSmallCardList items={item.news} />}
                    />
                    <FacilityDetailBox
                        className="map"
                        title={'Карта'}
                        elementContent={
                            <Map
                                display
                                placemarks={[
                                    {
                                        title: item.name,
                                        marks: [item.cX, item.cY],
                                    },
                                ]}
                            />
                        }
                    />
                </>
            ) : (
                <PseudoFacilityDetailContent />
            )}
        </StyledFacilityDetailContent>
    );
};
export default FacilityDetailContent;
