import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import Slider from '@/components/atoms/Slider/Slider';
import TextField from '@/components/atoms/TextField/TextField';
import { StyledSliderTextField } from './StyledSliderTextField';
interface Props {
    minDistance: number;
    value: number[];
    setValue: (value: number[]) => void;
    label: string;
    range: RangeFilter;
}
const SliderTextField = ({
    minDistance,
    value,
    setValue,
    range,
    label = '',
}: Props) => {
    return (
        <StyledSliderTextField>
            <Slider
                range={range}
                minDistance={minDistance}
                value={value}
                setValue={setValue}
            />
            <div>
                <TextField
                    variant="outlined"
                    size="small"
                    value={value[0]}
                    placeholder={`от ${label}`}
                    type="number"
                    onChange={(event) =>
                        setValue([Number(event.target.value), value[1]])
                    }
                />
                <TextField
                    variant="outlined"
                    value={value[1]}
                    placeholder={`до ${label}`}
                    type="number"
                    onChange={(event) =>
                        setValue([value[0], Number(event.target.value)])
                    }
                />
            </div>
        </StyledSliderTextField>
    );
};
export default SliderTextField;
