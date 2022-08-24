import { files } from '@/app/api/endpoints';
import Typography from '@mui/material/Typography';
import { StyledDeveloperInformSmallCard } from './StyledDeveloperInformSmallCard';

interface Props {
    developerAvatar: string;
    developerName: string;
}
const DeveloperInformSmallCard = ({
    developerAvatar,
    developerName,
}: Props) => {
    return (
        <StyledDeveloperInformSmallCard>
            <div className={'imgContainer'}>
                <img
                    src={`${process.env.REACT_APP_API_URL}${files.getImage(
                        developerAvatar
                    )}`}
                    alt={developerName}
                />
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
