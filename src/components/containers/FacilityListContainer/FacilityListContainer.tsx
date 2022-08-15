/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import { FacilityFlatDecoration } from '@/app/types/Facility/FacilityFlatDecoration';
import { FacilityHouseClass } from '@/app/types/Facility/FacilityHouseClass';
import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
import { FacilityRoomCount } from '@/app/types/Facility/FacilityRoomCount';
import { FacilityType } from '@/app/types/Facility/FaculityType';
import FacilityList from '@/components/organisms/FacilityList/FacilityList';
import { useAppContext } from '@/contexts/StoreContext';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

const FacilityListContainer = () => {
    const store = useAppContext();
    // const filter: GetAllFacilityDto = { sort: FacilitySortBy.byname };
    // store.facility.getAll(filter);
    // const itemsList = store.facility.data;

    const itemsList: FacilityInfoDto[] = [
        {
            id: '125',
            name: 'МФК Имеретинские Высоты',
            cX: 43.412533,
            cY: 39.982828,
            address: 'ул. Ворошиловоградская, 273',
            price: 0,
            square: 0,
            description:
                'МФК Имеретинские Высоты - это комплекс элит класса, не имеющий аналогов в своем роде. Комплекс располагается среди густой растительности ПГТ Сириус, в непосредственной близости к Олимпийскому парку. Здесь находятся спортивно-развлекательные комплексы международного уровня, Огромный парк аттракционов Сочи Парк, именуемый в народе Русским Диснейлендом. Необъятная набережная и чистейшие пляжи Имеретинской низменности, кафе, рестораны, обширная сфера услуг и развлечений - это все будет доступно круглый год собственникам квартир и апартаментов МФК. \nСам комплекс представляет собой ансамбль из 4-х разноуровневых зданий, самое малоэтажное из которых (8 этажей) отведено под коммерческие, офисные помещения и апартаменты. Из окон любой квартиры  открывается бесподобный вид на густую тропическую зелень, горы и морскую гладь, благодаря удачному расположению каждого здания. Так же квартиры на выбор оборудованы балконом или лоджией и имеют панорамное остекление.',
            district: 'Адлерский',
            microDistrict: 'Веселое',
            flatsCount: 70,
            minPrice: 0,
            maxPrice: 0,
            minSquare: 33,
            maxSquare: 45,
            material: 'Монолит-каркас',
            parking: 'Придомовой, подземный',
            territory: 'Закрытая, охраняемая',
            ceilingHeight: 3,
            facilityType: FacilityType.new,
            registrations: FacilityRegistration.fz_214,
            flatDecoration: FacilityFlatDecoration.finishing,
            houseClass: FacilityHouseClass.business,
            benefits: [],
            communications: [],
            paymentOptions: [],
            installmentPlanOptions: [],
            sales: [],
            commissions: [],
            photoNames: [
                '09a8db7e54f7.jpeg',
                '10c99ab13f710b.jpg',
                '2ff31087d30c4.jpeg',
                'f1b41fd5ff43.jpeg',
                '936fb20e6202.jpeg',
                '197ef85ce9d1.jpeg',
            ],
            documentNames: [],
            news: [],
            pricePerMeter: 346000,
            apartmentLayouts: [
                '2e6c70d1e5fd.png',
                'cf58101efac36.png',
                '5810f3cb39b108.png',
            ],
            isIllegal: false,
            building: '',
            city: 'Сочи',
            isFavourite: false,
            isEnabled: true,
            developerName: 'Developer Dev1',
            developerAvatar: 'e2cfbb2499a7.png',
            distanceToTheBeach: 2000,
            documents: [],
            roomsCount: 3,
            floor: 7,
            ownerId: null,
            checkerboardId: null,
            developerId: 3,
            deliveryDate: '2022-06-04T11:06:46.792Z',
            isDelivered: true,
            roomCount: FacilityRoomCount.eightPlus,
            cottageCount: 0,
            ownerName: '',
            ownerAvatar: '',
        },
        {
            id: '126',
            name: 'МФК Имеретинские Высоты',
            cX: 43.412533,
            cY: 39.982828,
            address: 'ул. Ворошиловоградская, 273',
            price: 0,
            square: 0,
            description:
                'МФК Имеретинские Высоты - это комплекс элит класса, не имеющий аналогов в своем роде. Комплекс располагается среди густой растительности ПГТ Сириус, в непосредственной близости к Олимпийскому парку. Здесь находятся спортивно-развлекательные комплексы международного уровня, Огромный парк аттракционов Сочи Парк, именуемый в народе Русским Диснейлендом. Необъятная набережная и чистейшие пляжи Имеретинской низменности, кафе, рестораны, обширная сфера услуг и развлечений - это все будет доступно круглый год собственникам квартир и апартаментов МФК. \nСам комплекс представляет собой ансамбль из 4-х разноуровневых зданий, самое малоэтажное из которых (8 этажей) отведено под коммерческие, офисные помещения и апартаменты. Из окон любой квартиры  открывается бесподобный вид на густую тропическую зелень, горы и морскую гладь, благодаря удачному расположению каждого здания. Так же квартиры на выбор оборудованы балконом или лоджией и имеют панорамное остекление.',
            district: 'Адлерский',
            microDistrict: 'Веселое',
            flatsCount: 70,
            minPrice: 0,
            maxPrice: 0,
            minSquare: 33,
            maxSquare: 45,
            material: 'Монолит-каркас',
            parking: 'Придомовой, подземный',
            territory: 'Закрытая, охраняемая',
            ceilingHeight: 3,
            facilityType: FacilityType.new,
            registrations: FacilityRegistration.fz_214,
            flatDecoration: FacilityFlatDecoration.finishing,
            houseClass: FacilityHouseClass.business,
            benefits: [],
            communications: [],
            paymentOptions: [],
            installmentPlanOptions: [],
            sales: [],
            commissions: [],
            photoNames: [
                '09a8db7e54f7.jpeg',
                '10c99ab13f710b.jpg',
                '2ff31087d30c4.jpeg',
                'f1b41fd5ff43.jpeg',
                '936fb20e6202.jpeg',
                '197ef85ce9d1.jpeg',
            ],
            documentNames: [],
            news: [],
            pricePerMeter: 346000,
            apartmentLayouts: [
                '2e6c70d1e5fd.png',
                'cf58101efac36.png',
                '5810f3cb39b108.png',
            ],
            isIllegal: false,
            building: '',
            city: 'Сочи',
            isFavourite: false,
            isEnabled: true,
            developerName: 'Developer Dev1',
            developerAvatar: 'e2cfbb2499a7.png',
            distanceToTheBeach: 2000,
            documents: [],
            roomsCount: 3,
            floor: 7,
            ownerId: null,
            checkerboardId: null,
            developerId: 3,
            deliveryDate: '2022-06-04T11:06:46.792Z',
            isDelivered: true,
            roomCount: FacilityRoomCount.eightPlus,
            cottageCount: 0,
            ownerName: '',
            ownerAvatar: '',
        },
    ];
    const handleItemLike = (id: FacilityInfoDto['id']) => {
        console.log(0);
    };
    useEffect(() => {
        console.log(itemsList);
    }, [itemsList]);
    return <FacilityList items={itemsList} onItemLike={handleItemLike} />;
};
export default observer(FacilityListContainer);
