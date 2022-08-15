import { ExpandMoreIcon } from '@components/atoms/Icons/Icons';
import Typography from '@mui/material/Typography';
import { FormEvent } from 'react';
import {
    StyledAccordion,
    StyledAccordionDetails,
    StyledAccordionSummary,
} from './StyledFilterItem';

interface Props {
    id: string;
    title: string;
    content: JSX.Element;
    onChange: (e: FormEvent<HTMLDivElement>) => void;
}

const FilterItem = ({ id, title, content, onChange }: Props) => {
    return (
        <StyledAccordion>
            <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
            >
                <Typography variant="h5" color={'common.black'}>
                    {title}
                </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails onChange={onChange}>
                {content}
            </StyledAccordionDetails>
        </StyledAccordion>
    );
};
export default FilterItem;
