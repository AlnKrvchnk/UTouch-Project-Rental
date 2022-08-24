import Button from '@/components/atoms/Button/Button';
import { Typography } from '@mui/material';
import { StyledApartmentLayoutsImgBox } from './StyledApartmentLayoutsImgBox';
interface Props {
    imgUrl: string;
    onClose: () => void;
    show: boolean;
}
const ApartmentLayoutsImgBox = ({ imgUrl, onClose, show }: Props) => {
    return (
        <StyledApartmentLayoutsImgBox show={show}>
            <div>
                <div>
                    <Typography
                        color={'common.black'}
                        sx={{ fontWeight: '500', fontSize: '36px' }}
                    >
                        Планировка
                    </Typography>
                    <Button onClick={onClose} variant={'text'}>
                        <Typography
                            color={'common.black'}
                            sx={{ fontWeight: '500', fontSize: '24px' }}
                        >
                            X
                        </Typography>
                    </Button>
                </div>
                <img src={imgUrl} alt="" />
            </div>
        </StyledApartmentLayoutsImgBox>
    );
};
export default ApartmentLayoutsImgBox;
