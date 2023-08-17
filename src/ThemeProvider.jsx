import { createTheme } from '@mui/material/styles';

const typografia = (colorMain, colorDark, colorLight) => ({
    basic: {
        h1: {
            fontSize: 50,
            fontWeight: 800,
            color: colorMain,
            textShadow: "0px 0px 1px rgba(0, 0, 0, 0.70)",
        },
        h2: {},
        h3: {},
        h4: {},
        h5: {
            fontSize: 30,
            fontWeight: 300,
            color: colorDark,
            textShadow: "0px 0px 2px rgba(0, 0, 0, 0.70)",
        },
        h6: {},
        p: {
            fontWeight: 200, 
            fontSize: 18,
            color: colorDark,
        },
        subtitle: {
            color: colorLight,
            fontSize: 30
        },
        fontFamily: 'Saira Semi Condensed',
    },
    menu: {
        fontWeight: 800,
        fontSize: 18,
    },
    presentation: {
        fontWeight: 800,
        fontSize: 18,
    }
});

const whiteTheme = createTheme({
    palette: {
        primary: {
            main: "#2E56D1",
            contrastText: "#FFFFFF",
            dark: "#0B33BC",
            light: "#E9F4FF",
        },
        secondary: {
            main: "#E9F4FF",
            contrastText: "#2E56D1",
            dark: "#89A3C3",
            light: "#FFFFFF",
        }
    },
    typography: typografia("#1644CF", "#E9F4FF", "#FFFFFF")
});
const blackTheme = createTheme({
    palette: {
        primary: {
            main: "#3A5A71",
            contrastText: "#6BDEE4",
            dark: "#1C344D",
            light: "#52798F",
        },
        secondary: {
            main: "#3FBCC3",
            contrastText: "#1C344D",
            dark: "#0B838B",
            light: "#6BDEE4",
        }
    },
    typography: typografia("#6BDEE4", "#3FBCC3", "#FFFFFF")
});
const temas = [
    whiteTheme,
    blackTheme
];

export default temas;