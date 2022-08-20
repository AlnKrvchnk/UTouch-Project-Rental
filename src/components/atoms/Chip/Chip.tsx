import Button from '@components/atoms/Button/Button';
import { RemoveIcon } from '@components/atoms/Icons/Icons';
import { Props as StyledProps, StyledChip } from './StyledChip';

interface Props extends StyledProps {
    removeChip?: () => void;
}

const Chip = ({ color, label, size, filter, removeChip }: Props) => {
    return (
        <StyledChip
            color={color}
            title={String(label)}
            label={
                <span>
                    {label}{' '}
                    {filter && (
                        <Button color="secondary" onClick={removeChip}>
                            <RemoveIcon />
                        </Button>
                    )}
                </span>
            }
            size={size}
            filter={filter}
        />
    );
};
export default Chip;
