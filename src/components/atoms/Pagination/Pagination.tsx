import PaginationItem from '@mui/material/PaginationItem';
import { StyledPagination } from './StyledPagination';

interface Props {
    prevPage: () => void;
    nextPage: () => void;
}

const Pagination = ({ prevPage, nextPage }: Props) => {
    return (
        <StyledPagination>
            <PaginationItem type="previous" onClick={prevPage} />
            <PaginationItem type="next" onClick={nextPage} />
        </StyledPagination>
    );
};
export default Pagination;
