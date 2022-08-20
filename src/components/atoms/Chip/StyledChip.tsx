import Chip, { ChipProps } from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

export interface Props extends ChipProps {
    filter?: boolean;
}

export const StyledChip = styled(Chip)<Props>(({ theme, filter }) => ({
    borderRadius: filter ? 16 : 4,
    maxWidth: filter ? 'auto' : '100px',
    backdropFilter: filter ? 'none' : 'blur(19px)',
    padding: filter ? '4px 6px 4px 12px' : '16px 8px',
    fontWeight: filter ? '500' : '700',
    fontSize: filter ? 13 : 14,
    margin: filter ? '8px auto' : '',
    '&:not(:last-of-type)': {
        marginRight: 8,
    },
    '&>*': {
        padding: '0!important',
    },
    '& button': {
        width: 20,
        height: 20,
        borderRadius: '50%',
        minWidth: 'auto',
        padding: 0,
        marginLeft: 10,
        '&:hover': {
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
    },
}));
