import { createTheme } from '@mui/material';

const Theme = createTheme({
    palette: {
        //   action?: Partial<TypeAction>;
        mode: 'light',
        common: {
            black: '#000',
            white: '#fff',
        },
        background: {
            default: '#F9FAFC',
            paper: '#fff',
        },
        grey: {
            300: '#E6E8F0',
            500: '#9FA4AC',
            900: '#323643',
        },
        primary: {
            // light:
            main: '#1F64E5',
            // dark:
            contrastText: '#fff',
        },
        secondary: {
            main: '#fff',
            contrastText: '#1F64E5',
        },
        // error: {},
        warning: { main: '#FAB005' },
        info: {
            main: '#FAEADE',
            contrastText: '#FF8B2D',
        },
        // success: {},
        text: {
            primary: '#111827',
            secondary: '#6B7280',
            disabled: '#858585 ',
        },
    },
    shadows: [
        'none',
        '0px 4px 6px -2px rgba(100, 116, 139, 0.05),0px 10px 15px -3px rgba(100, 116, 139, 0.12) ',
        'inset 0px 0px 0px 1px #E6E8F0',
        '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1);',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ],
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
            fontWeight: 500,
            fontSize: 16,
            variantMapping: 'h6',
        },
        body1: {
            fontWeight: 400,
            fontSize: 14,
            variantMapping: 'p',
        },
        body2: {
            fontWeight: 400,
            fontSize: 12,
            variantMapping: 'p',
        },
        fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
});

export default Theme;
