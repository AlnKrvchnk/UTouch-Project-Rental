import { Facility } from './Facility';
export interface CreateFacilityDto extends Facility {
    developerId: number;
    distanceToTheBeach: number;
    ownerId: number;
}
