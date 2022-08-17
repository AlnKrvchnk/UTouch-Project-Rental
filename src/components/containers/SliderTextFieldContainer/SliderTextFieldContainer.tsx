import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import SliderTextField from '@/components/molecules/SliderTextField/SliderTextField';
import { useEffect, useState } from 'react';
interface Props {
    setFilterValue: (value: RangeFilter) => void;
    minDistance?: number;
    range: RangeFilter;
    value?: RangeFilter;
}
const SliderTextFieldContainer = ({
    setFilterValue,
    minDistance,
    range,
}: Props) => {
    const [value, setValue] = useState<number[]>([range.min, range.max]);
    const [firstSet, setFirstSet] = useState<boolean>(true);
    useEffect(() => {
        !firstSet &&
            setFilterValue({ min: value[0], max: value[1] } as RangeFilter);
        setFirstSet(false);
    }, [value]);

    return (
        <SliderTextField
            minDistance={10}
            range={range}
            value={value}
            setValue={(value) => setValue(value)}
        />
    );
};
export default SliderTextFieldContainer;
