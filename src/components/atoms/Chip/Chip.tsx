import Button from '@components/atoms/Button/Button';
import { RemoveIcon } from '@components/atoms/Icons/Icons';
import { Props, StyledChip } from './StyledChip';

const Chip = ({ color, label, size, filter }: Props) => {
    return (
        <StyledChip
            color={color}
            label={
                <span>
                    {label}{' '}
                    {filter && (
                        <Button color="secondary">
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
