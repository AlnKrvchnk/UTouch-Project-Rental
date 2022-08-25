import Chip, { ChipProps } from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

export interface Props extends ChipProps {
    isFilter?: boolean;
}

export const StyledChip = styled(Chip)<Props>(({ theme, isFilter }) => ({
    borderRadius: isFilter ? 16 : 4,
    maxWidth: isFilter ? 'auto' : '100px',
    backdropFilter: isFilter ? 'none' : 'blur(19px)',
    padding: isFilter ? '4px 6px 4px 12px' : '16px 8px',
    fontWeight: isFilter ? '500' : '700',
    fontSize: isFilter ? 13 : 14,
    margin: isFilter ? '8px auto' : '',
    '&:not(:last-of-type)': {
        marginRight: 8,
    },
    '&>*': {
        padding: '0!important',
        alignItems: 'center',
        display: 'flex',
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
