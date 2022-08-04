import { FacilityBenefit } from '../Facility/FacilityBenefit';
import { FacilityDistrict } from '../Facility/FacilityDistrict';
import { FacilityFlatDecoration } from '../Facility/FacilityFlatDecoration';
import { FacilityHouseClass } from '../Facility/FacilityHouseClass';
import { FacilityMicroDistrict } from '../Facility/FacilityMicroDistrict';
import { FacilityPaymentOption } from '../Facility/FacilityPaymentOption';
import { FacilityRegistration } from '../Facility/FacilityRegistration';
import { FacilityType } from '../Facility/FaculityType';

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
