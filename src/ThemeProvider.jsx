
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
            light: "##FFFFFF",
        }
    },

});
const blackTheme = createTheme({
    palette: {
        primary: {
            main: "#2E56D1",
            contrastText: "#FFFFFF",
            dark: "#0B33BC",
            light: "#000000",
        },
        secondary: {
            main: "#E9F4FF",
            contrastText: "#2E56D1",
            dark: "#89A3C3",
            light: "#000000",
        }
    },
});
const temas = [
    whiteTheme,
    blackTheme
];

export default temas;