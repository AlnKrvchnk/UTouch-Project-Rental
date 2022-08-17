import Pagination from '@/components/atoms/Pagination/Pagination';
import Typography from '@mui/material/Typography';
import { StyledPaginationLabel } from './StyledPaginationLabel';

interface Props {
    onPrev: () => void;
    onNext: () => void;
    currentPage: number;
    pageCount: number;
}

const PaginationLabel = ({ onPrev, onNext, currentPage, pageCount }: Props) => {
    return (
        <StyledPaginationLabel>
            <Pagination prevPage={onPrev} nextPage={onNext} />
            <Typography color="text.primary" variant="subtitle2">
                Страница {currentPage} из {pageCount}
            </Typography>
        </StyledPaginationLabel>
    );
};
export default PaginationLabel;
