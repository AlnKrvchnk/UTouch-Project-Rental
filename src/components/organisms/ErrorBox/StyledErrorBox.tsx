import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { styled } from '@mui/material/styles';

export const WarningIcon = styled(WarningAmberRoundedIcon)(({ theme }) => ({
    color: theme.palette.warning.main,
    width: 20,
    height: 'auto',
    marginRight: 16,
}));

export const StyledErrorBox = styled('div')(({ theme }) => ({
    color: theme.palette.text.secondary,
    padding: 16,
    borderRadius: 8,
    background: theme.palette.background.paper,
    fontSize: 12,
    boxShadow: theme.shadows[2],
    fontFamily: theme.typography.fontFamily,
    display: 'flex',
    alignItems: 'center',
}));
