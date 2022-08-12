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
        // error: {},
        warning: { main: '#FAB005' },
        // info: {},
        // success: {},
        text: {
            primary: '#111827',
            secondary: '#6B7280',
            disabled: '#9FA4AC',
        },
    },
    spacing: 4,
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: 32,
            variantMapping: 'h1',
        },
        h2: {
            fontWeight: 600,
            fontSize: 24,
            variantMapping: 'h1',
        },
        h3: {
            fontWeight: 400,
            fontSize: 24,
            variantMapping: 'h2',
        },
        h4: {
            fontWeight: 400,
            fontSize: 18,
            variantMapping: 'h3',
        },
        h5: {
            fontWeight: 600,
            fontSize: 16,
            variantMapping: 'h4',
        },
        h6: {
            fontWeight: 400,
            fontSize: 16,
            variantMapping: 'h5',
        },
        subtitle1: {
            fontWeight: 600,
            fontSize: 14,
            variantMapping: 'h6',
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: 14,
            variantMapping: 'h6',
        },
        body1: {
            fontWeight: 500,
            fontSize: 16,
            variantMapping: 'p',
        },
        fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
});

export default Theme;
