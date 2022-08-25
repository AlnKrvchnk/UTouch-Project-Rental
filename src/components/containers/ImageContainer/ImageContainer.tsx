import { useImageUrl } from '@/hooks/useImageUrl';

interface Props {
    src: string;
    title: string;
}
const ImageContainer = ({ src, title }: Props) => {
    const image = useImageUrl(src);
    return <img src={image} alt={title} />;
};
export default ImageContainer;
