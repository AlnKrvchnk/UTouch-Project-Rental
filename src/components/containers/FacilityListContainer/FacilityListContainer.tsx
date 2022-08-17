/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import { FacilityInfoDto } from '@/app/types/Facility/FacilityInfoDto';
import FacilityList from '@/components/organisms/FacilityList/FacilityList';
interface Props {
    itemsList: FacilityInfoDto[];
}

const FacilityListContainer = ({ itemsList }: Props) => {
    const handleItemLike = (id: string) => {
        console.log(0);
    };

    return <FacilityList items={itemsList} onItemLike={handleItemLike} />;
};
export default FacilityListContainer;
