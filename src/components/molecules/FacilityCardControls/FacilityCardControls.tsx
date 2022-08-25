import {
    CollectionsIcon,
    LikeIcon,
    SolidLikeIcon,
} from '@/components/atoms/Icons/Icons';
import Button from '@components/atoms/Button/Button';
import { StyledFacilityCardControls } from './StyledFacilityCardControls';

interface Props {
    onCollection: () => void;
    onLike: () => void;
    isFavorite: boolean;
    isCollection: boolean;
}

const FacilityCardControls = ({
    onCollection,
    onLike,
    isFavorite,
    isCollection,
}: Props) => {
    return (
        <StyledFacilityCardControls>
            <Button
                variant={'outlined'}
                color={'primary'}
                radius={8}
                size={'large'}
                onClick={onCollection}
            >
                <CollectionsIcon />
            </Button>
            <Button
                variant={'outlined'}
                color={'primary'}
                radius={8}
                size={'large'}
                onClick={onLike}
            >
                {isFavorite ? <SolidLikeIcon /> : <LikeIcon />}
            </Button>
        </StyledFacilityCardControls>
    );
};

export default FacilityCardControls;
