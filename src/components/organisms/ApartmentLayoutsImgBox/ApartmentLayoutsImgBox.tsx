import Button from '@/components/atoms/Button/Button';
import { useImageUrl } from '@/hooks/useImageUrl';
import { CloseIcon } from '@components/atoms/Icons/Icons';
import { Typography } from '@mui/material';
import { StyledApartmentLayoutsImgBox } from './StyledApartmentLayoutsImgBox';
interface Props {
    imgUrl?: string;
    isShow: boolean;
    onClose: () => void;
}
const ApartmentLayoutsImgBox = ({ imgUrl, isShow, onClose }: Props) => {
    const image = useImageUrl(imgUrl);
    return (
        <StyledApartmentLayoutsImgBox show={isShow}>
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
                            sx={{ fontSize: '24px', lineHeight: 0 }}
                        >
                            <CloseIcon />
                        </Typography>
                    </Button>
                </div>
                <img src={image} alt="" />
            </div>
        </StyledApartmentLayoutsImgBox>
    );
};
export default ApartmentLayoutsImgBox;
