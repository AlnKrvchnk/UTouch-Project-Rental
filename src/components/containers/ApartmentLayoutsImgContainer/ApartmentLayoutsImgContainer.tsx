import { files } from '@/app/api/endpoints';
import ApartmentLayoutsImgBox from '@/components/organisms/ApartmentLayoutsImgBox/ApartmentLayoutsImgBox';
import ApartmentLayoutsImg from '@components/atoms/ApartmentLayoutsImg/ApartmentLayoutsImg';
import { useState } from 'react';
interface Props {
    imgsUrl: string[];
}
const ApartmentLayoutsImgContainer = ({ imgsUrl }: Props) => {
    const [show, setShow] = useState<boolean>(false);
    const [showImg, setShowImg] = useState<string>('');

    return (
        <>
            {imgsUrl.map((img) => (
                <ApartmentLayoutsImg
                    key={img}
                    imgUrl={`${process.env.REACT_APP_API_URL}${files.getImage(
                        img
                    )}`}
                    showImg={() => {
                        setShowImg(img);
                        setShow(true);
                    }}
                />
            ))}
            <ApartmentLayoutsImgBox
                imgUrl={`${process.env.REACT_APP_API_URL}${files.getImage(
                    showImg
                )}`}
                onClose={() => {
                    setShow(false);
                }}
                show={show}
            />
        </>
    );
};
export default ApartmentLayoutsImgContainer;
