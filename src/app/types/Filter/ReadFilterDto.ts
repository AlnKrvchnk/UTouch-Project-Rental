import { FacilityBenefit } from '../Facility/FacilityBenefit';
import { FacilityDistrict } from '../Facility/FacilityDistrict';
import { FacilityFlatDecoration } from '../Facility/FacilityFlatDecoration';
import { FacilityHouseClass } from '../Facility/FacilityHouseClass';
import { FacilityMicroDistrict } from '../Facility/FacilityMicroDistrict';
import { FacilityPaymentOption } from '../Facility/FacilityPaymentOption';
import { FacilityRegistration } from '../Facility/FacilityRegistration';
import { FacilityType } from '../Facility/FaculityType';

export enum FilterTitle {
    districts = 'Район',
    microDistricts = 'Микрорайон ',
    facilityTypes = 'Тип недвижимости',
    benefits = 'Преимущества',
    registrations = 'Оформление',
    decorations = 'Отделка квартиры',
    paymentOptions = 'Варианты оплаты',
    houseClasses = 'Класс дома',
    price = 'Цена',
    pricePerMeter = 'Цена за метр',
    square = 'Площадь',
    deliveryDate = 'Срок сдачи',
    distanceToTheBeach = 'Расстояние до моря',
    deliveryDates = 'Сроки сдачи',
}

export interface ReadFilterDto {
    districts?: FacilityDistrict[];
    microDistricts?: FacilityMicroDistrict[];
    facilityTypes?: FacilityType[];
    benefits?: FacilityBenefit[];
    registrations?: FacilityRegistration[];
    decorations?: FacilityFlatDecoration[];
    paymentOptions?: FacilityPaymentOption[];
    houseClasses?: FacilityHouseClass[];
    price?: number;
    pricePerMeter?: number;
    square?: number;
    deliveryDate?: string;
    distanceToTheBeach?: number;
    deliveryDates?: string[];
}
export const filterList: ReadFilterDto = {
    districts: Object.values(FacilityDistrict),
    microDistricts: Object.values(FacilityMicroDistrict),
    facilityTypes: Object.values(FacilityType),
    benefits: Object.values(FacilityBenefit),
    registrations: Object.values(FacilityRegistration),
    decorations: Object.values(FacilityFlatDecoration),
    paymentOptions: Object.values(FacilityPaymentOption),
    houseClasses: Object.values(FacilityHouseClass),
    price: 0,
    pricePerMeter: 0,
    square: 0,
    deliveryDate: '',
    distanceToTheBeach: 0,
};
