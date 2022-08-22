// eslint-disable-next-line max-len
import FacilityDetailContentContainer from '@/components/containers/FacilityDetailContentContainer/FacilityDetailContentContainer';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line max-len
interface Props {}
type Params = {
    id: string;
};
const FacilityDetail: FC<Props> = () => {
    const params = useParams<Params>();
    return (
        <>
            {/* <FacilityDetailHeaderContainer /> */}
            <FacilityDetailContentContainer id={params.id} />
        </>
    );
};
export default FacilityDetail;
