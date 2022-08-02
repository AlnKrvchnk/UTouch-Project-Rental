export interface Facility {
    facilityType: string;
    isIllegal: boolean;
    name: string;
    cX: number;
    cY: number;
    address: string;
    city: string;
    building: string;
    price: number;
    square: number;
    pricePerMeter: number;
    description: string;
    district: string;
    microDistrict: string;
    flatsCount: number;
    minPrice: number;
    maxPrice: number;
    minSquare: number;
    maxSquare: number;
    material: string;
    parking: string;
    territory: string;
    ceilingHeight: number;
    photoNames: [string];
    registrations: [string];
    flatDecoration: string;
    houseClass: string;
    benefits: [string];
    communications: [string];
    paymentOptions: [string];
    installmentPlanOptions: [string];
    sales: [string];
    commissions: [string];
    documentNames: [string];
    apartmentLayouts: [string];
    news: [
        {
            header: string;
            text: string;
        }
    ];
    isEnabled: true;
    distanceToTheBeach: number;
    developerId: number;
    roomsCount: number;
    cottageCount: number;
    ownerId: number;
    floor: number;
    checkerboardId: number;
    roomCount: string;
    deliveryDate: string;
}
