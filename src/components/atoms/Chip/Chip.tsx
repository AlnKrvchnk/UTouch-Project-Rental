import Button from '@components/atoms/Button/Button';
import { RemoveIcon } from '@components/atoms/Icons/Icons';
import { Props as StyledProps, StyledChip } from './StyledChip';

interface Props extends StyledProps {
    removeChip?: () => void;
}

const Chip = ({
    color,
    label,
    size,
    isFilter,
    removeChip,
    className,
}: Props) => {
    return (
        <StyledChip
            className={className}
            color={color}
            title={String(label)}
            label={
                <>
                    {label}{' '}
                    {isFilter && (
                        <Button color="secondary" onClick={removeChip}>
                            <RemoveIcon />
                        </Button>
                    )}
                </>
            }
            size={size}
            isFilter={isFilter}
        />
    );
};
export default Chip;
