import {createTheme} from '@mui/material/styles';
import i18next from "i18next";

export const AppTheme = createTheme({
    typography: {
        fontSize: 14,
        h1: {
            fontSize: i18next.language === 'ru' ? 120 : 186,
            fontWeight: 'bold',
            textTransform: "uppercase",
            fontFamily: [
                '"Albert Sans"',
                'Roboto',
                'sans-serif',
            ].join(','),
            '@media (max-width: 700px)': {
                fontSize: 105,
            },
            '@media (max-width: 400px)': {
                fontSize: 80,
            },
        },
        h2: {
            fontSize: 33,
            fontWeight: 'bold',
            textTransform: "uppercase",
            fontFamily: [
                '"Albert Sans"',
                'Roboto',
                'sans-serif',
            ].join(','),
            '@media (max-width: 700px)': {
                fontSize: 19,
            },
        },
        h3: {
            fontSize: 24,
            textTransform: "uppercase",
            fontFamily: [
                '"Albert Sans"',
                'Roboto',
                'sans-serif',
            ].join(','),
        },
        h4: {
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: "uppercase",
            fontFamily: [
                '"Albert Sans"',
                'Roboto',
                'sans-serif',
            ].join(','),
        },
        h5: {
            fontSize: 24,
            fontWeight: 'bold',
            fontFamily: [
                '"Albert Sans"',
                'Roboto',
                'sans-serif',
            ].join(','),
        },
        h6: {

        },
        subtitle1: {
            fontSize: 14,
            color: "#626262",
            '@media (max-width: 700px)': {
                fontSize: 14,
            },
        },
        subtitle2: {},
        text1: {
            fontSize: 20,
        },
        text2: {
            fontSize: 18,
        },
        text3: {
            fontSize: 16,
        },
        button: {
            whiteSpace: "nowrap"
        },
        caption: {},
        overline: {}
    },
    palette: {
        primary: {
            main: '#2298db',
        },
        white6: {
            main: 'rgba(255,255,255,0.6)',
            contrastText: 'rgba(255,255,255,0.6)',
        },
    },
});