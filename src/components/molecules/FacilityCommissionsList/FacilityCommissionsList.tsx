import Typography from '@mui/material/Typography';
interface Props {
    commissionsList: string[];
}

const FacilityCommissionsList = ({ commissionsList }: Props) => {
    return (
        <>
            {commissionsList.length > 0 ? (
                <>
                    {commissionsList.map((item) => (
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

export default FacilityCommissionsList;
