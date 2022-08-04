import { Facility } from './Facility';

export interface UpdateFacilityDto extends Facility {
    distanceToTheBeach: number;
    developerId: number;
    ownerId: number;
}
