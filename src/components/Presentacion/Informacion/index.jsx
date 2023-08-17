import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";

const Informacion = () => {
    const tema = useTheme();
    const contenedor = {
        position: "relative",
        width: "50%",
        backdropFilter:"blur(20px)"
    };
    const contenedorTransparente = {
        position: "absolute",
        top: 0,
        left: 0,
        filter: "blur(5px)",
        width: "100%",
        height: "100%",

    };

    return <Box component="div" sx={contenedor}>
        <Typography variant="h5" sx={tema.typography.basic.h5}>Hola! Soy...</Typography>
        <Typography variant="h1" sx={tema.typography.basic.h1}>Lorenzo Chavez</Typography>
        <Typography variant="h5" sx={tema.typography.basic.h5}>Desarrollador Front-End</Typography>
        <Typography variant="p" sx={tema.typography.basic.p}>Soy un apasionado programador web con una formación en el desarrollo Front-End. Soy un excelente compañero de equipo, organizado y muy responsable. Me gustaría crecer y desarrollarme en un entorno donde se me desafíe y poner a prueba mis conocimientos. Siempre estoy dispuesto a aprender nuevas tecnologías y ampliar mis habilidades técnicas.</Typography>
        <Box sx={contenedorTransparente}></Box>
    </Box>
};

export default Informacion;