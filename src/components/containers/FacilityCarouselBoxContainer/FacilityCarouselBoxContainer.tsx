import { files } from '@/app/api/endpoints';
import FacilityCarouselBox from '@components/molecules/FacilityCarouselBox/FacilityCarouselBox';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Props {
    images: string[];
    isDelivered: boolean;
}

const FacilityCarouselBoxContainer = ({ images, isDelivered }: Props) => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <FacilityCarouselBox
            activeStep={activeStep}
            images={images.map(
                (img) =>
                    `${process.env.REACT_APP_API_URL}${files.getImage(img)}`
            )}
            maxSteps={maxSteps}
            handleNext={handleNext}
            handleBack={handleBack}
            handleStepChange={(step) => handleStepChange(step)}
            isDelivered={isDelivered}
        />
    );
};
export default FacilityCarouselBoxContainer;
