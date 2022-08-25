// eslint-disable-next-line max-len
import { StyledFacilityCardControls } from '@/components/molecules/FacilityCardControls/StyledFacilityCardControls';
import { StyledFacilityInform } from '@/components/molecules/FacilityInform/StyledFacilityInform';
import { StyledFacilityChips } from '@/components/molecules/FacilityInformChips/StyledFacilityChips';
// eslint-disable-next-line max-len
import { StyledFacilityInformDetail } from '@/components/molecules/FacilityInformDetail/StyledFacilityInformDetail';
import { Skeleton } from '@mui/material';
import { StyledFacilityCard } from '../FacilityCard/StyledFacilityCard';

const PseudoFacilityCard = () => {
    return (
        <StyledFacilityCard>
            <StyledFacilityInform>
                <div className="img">
                    <Skeleton
                        variant="rectangular"
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
                <div className="inform">
                    <div>
                        <Skeleton
                            variant="text"
                            width={'250px'}
                            height={'24px'}
                        />
                        <StyledFacilityChips>
                            <Skeleton
                                variant="rectangular"
                                width={'20%'}
                                height={'32px'}
                            />
                            <Skeleton
                                variant="rectangular"
                                sx={{ margin: '0 8px ' }}
                                width={'25%'}
                                height={'32px'}
                            />
                        </StyledFacilityChips>
                        <StyledFacilityInformDetail>
                            <Skeleton
                                variant="text"
                                width={'70%'}
                                height={'12px'}
                            />
                            <Skeleton
                                sx={{ margin: '8px 0' }}
                                variant="text"
                                width={'50%'}
                                height={'12px'}
                            />
                        </StyledFacilityInformDetail>
                    </div>
                    <Skeleton
                        variant="text"
                        width={'60%'}
                        height={'24px'}
                    />
                </div>
            </StyledFacilityInform>

            <StyledFacilityCardControls sx={{ width: '150px' }}>
                <Skeleton
                    variant="rectangular"
                    height={'40px'}
                    width={'100%'}
                />
                <Skeleton
                    variant="rectangular"
                    height={'40px'}
                    width={'100%'}
                />
            </StyledFacilityCardControls>
        </StyledFacilityCard>
    );
};
export default PseudoFacilityCard;
