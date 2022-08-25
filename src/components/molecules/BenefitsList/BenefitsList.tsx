import { ExistOptionIcon } from '@/components/atoms/Icons/Icons';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
interface Props {
    benefitsList: string[];
    className: string;
}

const BenefitsList = ({ benefitsList, className = 'benefits' }: Props) => {
    return (
        <Grid className={className} container>
            {benefitsList.map((item) => (
                <div style={{ display: 'flex', marginRight: '53px' }}>
                    <Typography
                        color={'primary.main'}
                        sx={{ marginRight: '24px', fontSize: '24px' }}
                    >
                        <ExistOptionIcon />
                    </Typography>
                    <Typography
                        color={'common.back'}
                        sx={{ fontWeight: '500', fontSize: '18px' }}
                    >
                        {item}
                    </Typography>
                </div>
            ))}
        </Grid>
    );
};
export default BenefitsList;
