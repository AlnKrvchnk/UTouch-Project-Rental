import PaginationLabel from '@components/molecules/PaginationLabel/PaginationLabel';
interface Props {
    pageCount: number;
    page: number;
    setPage: (page: number) => void;
}
const PaginationContainer = ({ pageCount, page, setPage }: Props) => {
    const prevPage = () => {
        page > 1 && setPage(page - 1);
        window.scrollTo(0, 0);
    };
    const nextPage = () => {
        page < pageCount && setPage(page + 1);
        window.scrollTo(0, 0);
    };
    return (
        <PaginationLabel
            onPrev={prevPage}
            onNext={nextPage}
            currentPage={page}
            pageCount={pageCount}
        />
    );
};
export default PaginationContainer;
