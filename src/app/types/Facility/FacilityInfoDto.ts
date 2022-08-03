import { Facility } from './Facility';
import { FileInfoDto } from './FileInfoDto';

export interface FacilityInfoDto extends Facility {
    id: string;
    isFavorite: boolean;
    developerName: string;
    developerAvatar: string;
    documents: [FileInfoDto];
    ownerName: string;
    ownerAvatar: string;
    isDelivered: boolean;
}
