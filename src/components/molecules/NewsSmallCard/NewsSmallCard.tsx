import { useImageUrl } from '@/hooks/useImageUrl';
import Typography from '@mui/material/Typography';
import { StyledNewsSmallCard } from './StyledNewsSmallCard';
interface Props {
    imgUrl: string;
    title: string;
}
const NewsSmallCard = ({ imgUrl, title }: Props) => {
    const image = useImageUrl(imgUrl);
    return (
        <StyledNewsSmallCard backgroundImage={image}>
            <Typography
                color={'common.white'}
                sx={{ wontSize: '18px', fontWeight: '700' }}
            >
                {title}
            </Typography>
        </StyledNewsSmallCard>
    );
};
export default NewsSmallCard;
