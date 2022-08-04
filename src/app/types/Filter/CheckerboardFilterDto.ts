import { FacilityFlatDecoration } from '../Facility/FacilityFlatDecoration';

export interface CheckerboardFilterDto {
    decorations?: FacilityFlatDecoration[];
    priceGte?: number;
    priceLt?: number;
    pricePerMeterGte?: number;
    pricePerMeterLt?: number;
    squareGte?: number;
    squareLt?: number;
    deliveryDates?: string[];
}
