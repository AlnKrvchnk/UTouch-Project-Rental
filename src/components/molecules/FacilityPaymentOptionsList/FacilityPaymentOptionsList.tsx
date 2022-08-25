import { FacilityPaymentOption } from '@/app/types/Facility/FacilityPaymentOption';
import {
    ExistOptionIcon,
    NotExistOptionIcon,
} from '@/components/atoms/Icons/Icons';
import { Grid, List, ListItem, Typography } from '@mui/material';

interface Props {
    installmentPlanOptions: string[];
    paymentOptions: FacilityPaymentOption[];
}

const FacilityPaymentOptionsList = ({
    paymentOptions,
    installmentPlanOptions,
}: Props) => {
    return (
        <Grid container>
            <Grid item sx={{ width: '50%' }}>
                <List sx={{ margin: '0' }}>
                    {paymentOptions.map((option) => (
                        <ListItem sx={{ padding: '0', alignItems: 'stretch' }}>
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
                                {option}
                                {option ===
                                    FacilityPaymentOption.installmentPlan && (
                                    <List sx={{ margin: '0' }}>
                                        {installmentPlanOptions.map(
                                            (option) => (
                                                <ListItem
                                                    sx={{
                                                        padding: '0',
                                                    }}
                                                >
                                                    <Typography
                                                        color={'text.disabled'}
                                                        variant={'body1'}
                                                    >
                                                        {option}
                                                    </Typography>
                                                </ListItem>
                                            )
                                        )}
                                    </List>
                                )}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item sx={{ width: '50%' }}>
                <List sx={{ margin: '0', alignItems: 'stretch' }}>
                    {Object.values(FacilityPaymentOption).map(
                        (option) =>
                            paymentOptions.indexOf(option) === -1 && (
                                <ListItem sx={{ padding: '0' }}>
                                    <Typography
                                        color={'text.disabled'}
                                        sx={{
                                            marginRight: '24px',
                                            fontSize: '24px',
                                        }}
                                    >
                                        <NotExistOptionIcon />
                                    </Typography>
                                    <Typography
                                        color={'common.back'}
                                        sx={{
                                            fontWeight: '500',
                                            fontSize: '18px',
                                        }}
                                    >
                                        {option}
                                    </Typography>
                                </ListItem>
                            )
                    )}
                </List>
            </Grid>
        </Grid>
    );
};
export default FacilityPaymentOptionsList;
