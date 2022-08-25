import { useImageArrayUrl } from '@/hooks/useImageArrayUrl';
import FacilityCarouselBox from '@components/molecules/FacilityCarouselBox/FacilityCarouselBox';
import { useState } from 'react';

interface Props {
    imagesUrl: string[];
    isDelivered: boolean;
}

const FacilityCarouselBoxContainer = ({ imagesUrl, isDelivered }: Props) => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const maxSteps = imagesUrl.length;
    const images = useImageArrayUrl(imagesUrl);

    return (
        <FacilityCarouselBox
            activeStep={activeStep}
            images={images}
            maxSteps={maxSteps}
            handleNext={() => setActiveStep(activeStep + 1)}
            handleBack={() => setActiveStep(activeStep - 1)}
            handleStepChange={(step) => setActiveStep(step)}
            isDelivered={isDelivered}
        />
    );
};
export default FacilityCarouselBoxContainer;
