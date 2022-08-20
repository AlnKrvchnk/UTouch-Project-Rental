import { files } from '@/app/api/endpoints';

interface Props {
    src: string[];
    title: string;
}
const ImageContainer = ({ src, title }: Props) => {
    return (
        <img
            src={`${process.env.REACT_APP_API_URL}${files.getImage(src[0])}`}
            alt={title}
        />
    );
};
export default ImageContainer;
