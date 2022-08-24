import { FacilityNewsDto } from '@/app/types/Facility/FacilityNewsDto';
import NewsSmallCard from '@/components/molecules/NewsSmallCard/NewsSmallCard';
import { StyledNewsSmallCardList } from './StyledNewsSmallCardList';

interface Props {
    items: FacilityNewsDto[];
}
const NewsSmallCardList = ({ items }: Props) => {
    return (
        <StyledNewsSmallCardList>
            {items.map((item) => (
                <NewsSmallCard imgUrl={item.image} title={item.header} />
            ))}
        </StyledNewsSmallCardList>
    );
};
export default NewsSmallCardList;
