import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityDetailBox from '@/components/atoms/FacilityDetailBox/FacilityDetailBox';
import { ExistOption } from '@/components/atoms/Icons/Icons';
// eslint-disable-next-line max-len
import DeveloperInformSmallCard from '@/components/molecules/DeveloperInformSmallCard/DeveloperInformSmallCard';
import FacilityCardControls from '@/components/molecules/FacilityCardControls/FacilityCardControls';
// eslint-disable-next-line max-len
import FacilityPaymentOptionsList from '@/components/molecules/FacilityPaymentOptionsList/FacilityPaymentOptionsList';
import DocumentsItem from '@components/atoms/DocumentsItem/DocumentsItem';
import Map from '@components/organisms/Map/Map';
import { Grid, List, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import NewsSmallCardList from '../NewsSmallCardList/NewsSmallCardList';
import { StyledFacilityDetailContent } from './StyledFacilityDetailContent';
// eslint-disable-next-line max-len
import ApartmentLayoutsImgContainer from '@components/containers/ApartmentLayoutsImgContainer/ApartmentLayoutsImgContainer';
interface Props {
    item?: FacilityInfoDto;
    onItemLike: () => void;
}
const FacilityDetailContent = ({ item, onItemLike }: Props) => {
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
            {item && (
                <Grid className="benefits" container>
                    {item.benefits.map((item) => (
                        <div style={{ display: 'flex', marginRight: '53px' }}>
                            <Typography
                                color={'primary.main'}
                                sx={{ marginRight: '24px', fontSize: '24px' }}
                            >
                                <ExistOption />
                            </Typography>
                            <Typography
                                color={'common.back'}
                                sx={{ fontWeight: '500', fontSize: '18px' }}
                            >
                                {item}
                            </Typography>
                        </div>
                    ))}
                </Grid>
            )}
            {item && (
                <FacilityDetailBox
                    className="general"
                    elementContent={
                        <Grid
                            container
                            sx={{ justifyContent: 'space-between' }}
                        >
                            <Grid item>
                                <Typography
                                    color={'common.black'}
                                    variant={'h4'}
                                    sx={{ paddingBottom: '16px' }}
                                >
                                    Общие характеристики
                                </Typography>
                                <List sx={{ margin: '0' }}>
                                    {[
                                        `Класс дома: ${item.houseClass}`,
                                        `Материал здания: ${item.material}`,
                                        `Тип: ${item.facilityType}`,
                                        `Паркинг: ${item.parking}`,
                                        `Территория: ${item.territory}`,
                                        `Высота потолков: ${item.ceilingHeight.toLocaleString()}м`,
                                        `Расстояние до моря: ${item.distanceToTheBeach?.toLocaleString()}м`,
                                    ].map((param) => (
                                        <ListItem sx={{ padding: '0' }}>
                                            <Typography
                                                color={'text.disabled'}
                                                variant={'body1'}
                                            >
                                                {param}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item>
                                <Typography
                                    color={'common.black'}
                                    variant={'h4'}
                                    sx={{ paddingBottom: '16px' }}
                                >
                                    Коммуникации
                                </Typography>
                                <List>
                                    {item.communications.map((param) => (
                                        <ListItem sx={{ padding: '0' }}>
                                            <Typography
                                                color={'text.disabled'}
                                                variant={'body1'}
                                            >
                                                {param}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item>
                                <Typography
                                    color={'common.black'}
                                    variant={'h4'}
                                    sx={{ paddingBottom: '16px' }}
                                >
                                    Оформление
                                </Typography>
                                <List sx={{ margin: '0' }}>
                                    {[
                                        `Варианты оформления: ${item.registrations}`,
                                        `Тип недвижимости: ${item.facilityType}`,
                                        `Сумма в договоре:  ${item.price.toLocaleString()}`,
                                    ].map((param) => (
                                        <ListItem sx={{ padding: '0' }}>
                                            <Typography
                                                color={'text.disabled'}
                                                variant={'body1'}
                                            >
                                                {param}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    }
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="owner"
                    elementContent={
                        <DeveloperInformSmallCard
                            developerAvatar={item.developerAvatar}
                            developerName={item.developerName}
                        />
                    }
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
                            onLike={onItemLike}
                            isFavorite={item.isFavourite}
                            isCollection={false}
                        />
                    }
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="sales"
                    title={'Акция'}
                    elementContent={
                        item.sales.length > 0 ? (
                            <>
                                {item.sales.map((item) => (
                                    <Typography
                                        color={'text.disabled'}
                                        variant={'body1'}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </>
                        ) : (
                            <Typography
                                color={'text.disabled'}
                                variant={'body1'}
                            >
                                'Не найдено'
                            </Typography>
                        )
                    }
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="commission"
                    title={'Комиссия'}
                    elementContent={
                        item.commissions.length > 0 ? (
                            <>
                                {item.sales.map((item) => (
                                    <Typography
                                        color={'text.disabled'}
                                        variant={'body1'}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </>
                        ) : (
                            <Typography
                                color={'text.disabled'}
                                variant={'body1'}
                            >
                                'Не найдено'
                            </Typography>
                        )
                    }
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="payment"
                    title={'Оплата'}
                    elementContent={
                        <FacilityPaymentOptionsList
                            installmentPlanOptions={item.installmentPlanOptions}
                            paymentOptions={item.paymentOptions}
                        />
                    }
                />
            )}

            {item && (
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
            )}
            {item && (
                <FacilityDetailBox
                    className="layout"
                    title={'Планировка'}
                    elementContent={
                        <Grid
                            container
                            sx={{ gridColumnGap: '16px', gridRowGap: '16px' }}
                        >
                            <ApartmentLayoutsImgContainer
                                imgsUrl={item.apartmentLayouts}
                            />
                        </Grid>
                    }
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
                    elementContent={<NewsSmallCardList items={item.news} />}
                />
            )}
            {item && (
                <FacilityDetailBox
                    className="map"
                    title={'Карта'}
                    elementContent={
                        <Map
                            display
                            placemarks={[
                                { title: item.name, marks: [item.cX, item.cY] },
                            ]}
                        />
                    }
                />
            )}
        </StyledFacilityDetailContent>
    );
};
export default FacilityDetailContent;
