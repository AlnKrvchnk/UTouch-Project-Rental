import { files } from '@/app/api/endpoints';
import Typography from '@mui/material/Typography';
import { StyledNewsSmallCard } from './StyledNewsSmallCard';
interface Props {
    imgUrl: string;
    title: string;
}
const NewsSmallCard = ({ imgUrl, title }: Props) => {
    return (
        <StyledNewsSmallCard
            backgroundImage={`${process.env.REACT_APP_API_URL}${files.getImage(
                imgUrl
            )}`}
        >
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
