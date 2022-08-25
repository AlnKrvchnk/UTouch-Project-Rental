import { DeliveryDateDto } from './DeliveryDateDto';
import { RangeFilter } from './RangeFilter';

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
    districts?: string[];
    microDistricts?: string[];
    facilityTypes?: string[];
    price?: RangeFilter;
    pricePerMeter?: RangeFilter;
    square?: RangeFilter;
    registrations?: string[];
    deliveryDate?: RangeFilter;
    decorations?: string[];
    paymentOptions?: string[];
    houseClasses?: string[];
    benefits?: string[];
    distanceToTheBeach?: RangeFilter;
    deliveryDates?: DeliveryDateDto[];
}
