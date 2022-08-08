import { createTheme } from '@mui/material';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#1F64E5',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fff',
            contrastText: '#1F64E5',
        },
        error: {},
        warning: {},
        info: {},
        success: {},
        text: {
            primary: '#111827',
            secondary: '#6B7280',
        },
    },
    spacing: 4,
    typography: {
        caption: {
            fontWeight: 700,
            fontSize: 32,
        },
        h1: {
            fontWeight: 600,
            fontSize: 24,
        },
        h2: {
            fontWeight: 400,
            fontSize: 24,
        },
        h3: {
            fontWeight: 400,
            fontSize: 18,
        },
        h4: {
            fontWeight: 600,
            fontSize: 16,
        },
        h5: {
            fontWeight: 400,
            fontSize: 16,
        },
        h6: {
            fontWeight: 500,
            fontSize: 14,
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: 14,
        },
        body1: {
            fontWeight: 500,
            fontSize: 16,
        },
        fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
});

export default Theme;
