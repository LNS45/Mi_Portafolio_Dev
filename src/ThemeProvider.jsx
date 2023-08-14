
import { createTheme } from '@mui/material/styles';

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
    typography:{
        fontFamily: 'Saira Semi Condensed',
        fontWeight: 800,
        fontSize: 18,
    }

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
    typography:{
        fontFamily: 'Saira Semi Condensed',
        fontWeight: 800,
        fontSize: 18,
    }
});
const temas = [
    whiteTheme,
    blackTheme
];

export default temas;