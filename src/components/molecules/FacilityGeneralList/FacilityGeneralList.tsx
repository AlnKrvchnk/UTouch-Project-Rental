import { FacilityCommunication } from '@/app/types/Facility/FacilityCommunication';
import { FacilityHouseClass } from '@/app/types/Facility/FacilityHouseClass';
import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
import { FacilityType } from '@/app/types/Facility/FaculityType';
import { useLocaleString } from '@/hooks/useLocaleString';
import { Grid, List, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';

interface Props {
    houseClass: FacilityHouseClass;
    material: string;
    facilityType: FacilityType;
    parking: string;
    territory: string;
    ceilingHeight: number;
    distanceToTheBeach: number;
    communications: FacilityCommunication[];
    registrations: FacilityRegistration[];
    price: number;
}
const FacilityGeneralList = ({
    houseClass,
    material,
    facilityType,
    parking,
    territory,
    ceilingHeight,
    distanceToTheBeach,
    communications,
    registrations,
    price,
}: Props) => {
    const priceFormated = useLocaleString(price);
    const ceilingHeightFormated = useLocaleString(price);
    const distanceToTheBeachFormated = useLocaleString(price);
    return (
        <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid item>
                <Typography
                    color={'common.black'}
                    variant={'h4'}
                    sx={{ paddingBottom: '16px' }}
                >
                    Общие характеристики
                </Typography>
                <List sx={{ margin: '0' }}>
                    {[
                        `Класс дома: ${houseClass}`,
                        `Материал здания: ${material}`,
                        `Тип: ${facilityType}`,
                        `Паркинг: ${parking}`,
                        `Территория: ${territory}`,
                        `Высота потолков: ${ceilingHeightFormated} м`,
                        `Расстояние до моря: ${distanceToTheBeachFormated} м`,
                    ].map((param) => (
                        <ListItem sx={{ padding: '0' }}>
                            <Typography
                                color={'text.disabled'}
                                variant={'body1'}
                            >
                                {param}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item>
                <Typography
                    color={'common.black'}
                    variant={'h4'}
                    sx={{ paddingBottom: '16px' }}
                >
                    Коммуникации
                </Typography>
                <List>
                    {communications.map((param) => (
                        <ListItem sx={{ padding: '0' }}>
                            <Typography
                                color={'text.disabled'}
                                variant={'body1'}
                            >
                                {param}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item>
                <Typography
                    color={'common.black'}
                    variant={'h4'}
                    sx={{ paddingBottom: '16px' }}
                >
                    Оформление
                </Typography>
                <List sx={{ margin: '0' }}>
                    {[
                        `Варианты оформления: ${registrations}`,
                        `Тип недвижимости: ${facilityType}`,
                        `Сумма в договоре:  ${priceFormated} руб.`,
                    ].map((param) => (
                        <ListItem sx={{ padding: '0' }}>
                            <Typography
                                color={'text.disabled'}
                                variant={'body1'}
                            >
                                {param}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
};
export default FacilityGeneralList;
