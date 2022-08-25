import ApartmentLayoutsImgBox from '@/components/organisms/ApartmentLayoutsImgBox/ApartmentLayoutsImgBox';
import ApartmentLayoutsImg from '@components/atoms/ApartmentLayoutsImg/ApartmentLayoutsImg';
import { Grid } from '@mui/material';
import { useMemo, useState } from 'react';
interface Props {
    imgsUrl: string[];
}
const ApartmentLayoutsImgContainer = ({ imgsUrl }: Props) => {
    const [zoomImgUrl, setZoomImgUrl] = useState<string | undefined>();

    const isZoomImage = useMemo(() => {
        return zoomImgUrl !== undefined;
    }, [zoomImgUrl]);
    return (
        <Grid
            container
            sx={{
                gridColumnGap: '16px',
                gridRowGap: '16px',
            }}
        >
            {imgsUrl.map((img) => (
                <ApartmentLayoutsImg
                    key={img}
                    imageUrl={img}
                    onZoomImage={() => {
                        setZoomImgUrl(img);
                    }}
                />
            ))}
            <ApartmentLayoutsImgBox
                imgUrl={zoomImgUrl}
                onClose={() => {
                    setZoomImgUrl(undefined);
                }}
                isShow={isZoomImage}
            />
        </Grid>
    );
};
export default ApartmentLayoutsImgContainer;
