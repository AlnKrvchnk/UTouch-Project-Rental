import Typography from '@mui/material/Typography';
import { StyledFacilityDetailBox } from './StyledFacilityDetailBox';

interface Props {
    title?: string;
    textContent?: string;
    elementContent?: JSX.Element;
    className: string;
}

const FacilityDetailBox = ({
    title,
    textContent,
    elementContent,
    className,
}: Props) => {
    return (
        <StyledFacilityDetailBox className={className}>
            {title && (
                <Typography
                    color={'common.black'}
                    variant={'h4'}
                    sx={{ paddingBottom: '16px' }}
                >
                    {title}
                </Typography>
            )}
            {textContent && (
                <Typography color={'text.disabled'} variant={'body1'}>
                    {textContent}
                </Typography>
            )}
            {elementContent}
        </StyledFacilityDetailBox>
    );
};
export default FacilityDetailBox;
