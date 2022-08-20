import { RangeFilter } from '@/app/types/Filter/RangeFilter';
import CheckBox from '@/components/atoms/CheckBox/CheckBox';
import { ExpandMoreIcon } from '@components/atoms/Icons/Icons';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line max-len
import SliderTextFieldContainer from '@/components/containers/SliderTextFieldContainer/SliderTextFieldContainer';
import {
    StyledAccordion,
    StyledAccordionDetails,
    StyledAccordionSummary,
} from './StyledFilterItem';

interface Props {
    title: string;
    isCheckbox?: boolean;
    isSlider?: boolean;
    value: string[] | RangeFilter;
    selectValue?: string[] | RangeFilter;
    onChange: (value: RangeFilter | string) => void;
    label?: string;
}

const FilterItem = ({
    title,
    isCheckbox = false,
    isSlider = false,
    value,
    label,
    selectValue,
    onChange,
}: Props) => {
    return (
        <StyledAccordion>
            <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${title}-content`}
                id={`${title}-header`}
            >
                <Typography variant="h5" color={'common.black'}>
                    {title}
                </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
                <>
                    {isCheckbox &&
                        (value as Array<string>).map((item, index) => (
                            <CheckBox
                                key={`${item}-${index}`}
                                title={item}
                                onChange={() => onChange(item)}
                                checked={
                                    selectValue !== undefined &&
                                    (selectValue as Array<string>).indexOf(
                                        item
                                    ) !== -1
                                }
                            />
                        ))}
                    {isSlider && (
                        <SliderTextFieldContainer
                            range={value as RangeFilter}
                            setFilterValue={(value) => onChange(value)}
                            value={selectValue as RangeFilter}
                            label={label || ''}
                        />
                    )}
                </>
            </StyledAccordionDetails>
        </StyledAccordion>
    );
};
export default FilterItem;
