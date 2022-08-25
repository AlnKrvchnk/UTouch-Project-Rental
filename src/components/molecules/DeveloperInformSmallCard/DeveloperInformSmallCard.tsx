import { useImageUrl } from '@/hooks/useImageUrl';
import Typography from '@mui/material/Typography';
import { StyledDeveloperInformSmallCard } from './StyledDeveloperInformSmallCard';
interface Props {
    developerAvatarUrl: string;
    developerName: string;
}
const DeveloperInformSmallCard = ({
    developerAvatarUrl,
    developerName,
}: Props) => {
    const developerAvatarImage = useImageUrl(developerAvatarUrl);
    return (
        <StyledDeveloperInformSmallCard>
            <div className={'imgContainer'}>
                <img src={developerAvatarImage} alt={developerName} />
            </div>
            <Typography
                align={'center'}
                color={'common.back'}
                variant={'h4'}
                sx={{ paddingBottom: '4px' }}
            >
                {developerName}
            </Typography>
            <Typography
                align={'center'}
                color={'text.disabled'}
                variant={'body1'}
            >
                Застройщик
            </Typography>
        </StyledDeveloperInformSmallCard>
    );
};
export default DeveloperInformSmallCard;
