import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
    '&:last-of-type': {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    '&:first-of-type': {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    boxShadow: theme.shadows[3],
    padding: 20,
    background: theme.palette.background.paper,
    '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    '&.Mui-expanded': {
        margin: 0,
    },
    '&:before': {
        content: 'none',
    },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    padding: 0,
    margin: 0,
    minHeight: 'auto',
    '& > *': {
        margin: '0!important',
    },
    '&.Mui-expanded': {
        minHeight: 'auto',
    },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: 0,
    paddingTop: 12,
}));
