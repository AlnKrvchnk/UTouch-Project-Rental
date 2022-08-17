import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import MuiSlider from '@mui/material/Slider';

interface Props {
    range?: RangeFilter;
    minDistance?: number;
    value: number[];
    setValue: (value: number[]) => void;
}
const Slider = ({ minDistance, value, setValue, range }: Props) => {
    // const [value, setValue] = useState<number[]>([20, 37]);

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([
                Math.min(newValue[0], value[1] - (minDistance || 0)),
                value[1],
            ]);
        } else {
            setValue([
                value[0],
                Math.max(newValue[1], value[0] + (minDistance || 0)),
            ]);
        }
    };

    return (
        <MuiSlider
            max={range ? range.max : 10}
            min={range ? range.min : 0}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            disableSwap
        />
    );
};
export default Slider;
