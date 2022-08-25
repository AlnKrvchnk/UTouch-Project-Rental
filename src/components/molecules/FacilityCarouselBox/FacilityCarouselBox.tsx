import Chip from '@/components/atoms/Chip/Chip';
import { ArrowNextIcon, ArrowPrevIcon } from '@components/atoms/Icons/Icons';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { StyledFacilityCarouselBox } from './StyledFacilityCarouselBox';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
interface Props {
    activeStep: number;
    images: string[];
    maxSteps: number;
    handleNext: () => void;
    handleBack: () => void;
    handleStepChange: (step: number) => void;
    isDelivered: boolean;
}
const FacilityCarouselBox = ({
    activeStep,
    images,
    maxSteps,
    handleNext,
    handleBack,
    handleStepChange,
    isDelivered,
}: Props) => {
    const theme = useTheme();
    return (
        <StyledFacilityCarouselBox>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((src, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img src={src} alt={`${index}`} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            {maxSteps > 1 && (
                <>
                    <Button
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        color={'secondary'}
                    >
                        <Typography color={'text.primary'}>
                            <ArrowNextIcon />
                        </Typography>
                    </Button>
                    <Button
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        color={'secondary'}
                    >
                        <Typography color={'text.primary'}>
                            <ArrowPrevIcon />
                        </Typography>
                    </Button>
                </>
            )}
            {isDelivered && (
                <Chip className={'chip'} color={'info'} label={'Сдан'} />
            )}
        </StyledFacilityCarouselBox>
    );
};
export default FacilityCarouselBox;
