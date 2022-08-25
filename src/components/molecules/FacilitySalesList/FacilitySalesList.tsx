import Typography from '@mui/material/Typography';
interface Props {
    salesList: string[];
}

const FacilitySalesList = ({ salesList }: Props) => {
    return (
        <>
            {salesList.length > 0 ? (
                <>
                    {salesList.map((item) => (
                        <Typography color={'text.disabled'} variant={'body1'}>
                            {item}
                        </Typography>
                    ))}
                </>
            ) : (
                <Typography color={'text.disabled'} variant={'body1'}>
                    'Не найдено'
                </Typography>
            )}
        </>
    );
};

export default FacilitySalesList;
