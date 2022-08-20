import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import SliderTextField from '@/components/molecules/SliderTextField/SliderTextField';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
interface Props {
    setFilterValue: (value: RangeFilter) => void;
    minDistance?: number;
    range: RangeFilter;
    value?: RangeFilter;
    label: string;
}
const SliderTextFieldContainer = ({
    setFilterValue,
    minDistance,
    range,
    value,
    label,
}: Props) => {
    const [sliderValue, setValue] = useState<RangeFilter>(value || range);
    const [firstSet, setFirstSet] = useState<boolean>(true);
    const [debounceValue] = useDebounce(sliderValue, 1000);
    useEffect(() => {
        !firstSet && setFilterValue(debounceValue);
        setFirstSet(false);
    }, [debounceValue]);

    return (
        <SliderTextField
            minDistance={minDistance || 0}
            range={range}
            value={[sliderValue.min, sliderValue.max]}
            setValue={(value) => setValue({ min: value[0], max: value[1] })}
            label={label}
        />
    );
};
export default SliderTextFieldContainer;
