import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import MuiSlider from '@mui/material/Slider';

interface Props {
    range: RangeFilter;
    minDistance: number;
    value: number[];
    setValue: (value: number[]) => void;
}
const Slider = ({ minDistance, value, setValue, range }: Props) => {
    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    return (
        <MuiSlider
            max={range.max}
            min={range.min}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            disableSwap
        />
    );
};
export default Slider;
