import { styled } from '@mui/material/styles';

export const StyledFacilityBriefInformationBox = styled('div')(({ theme }) => ({
    background: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 24,

    [theme.breakpoints.up('xl')]: {
        paddingLeft: 195,
        paddingRight: 195,
    },
    '>div': {
        maxWidth: '25%',
        '>*': {
            width: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
    },
}));
