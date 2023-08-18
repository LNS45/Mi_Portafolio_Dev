import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";

const Informacion = () => {
    const tema = useTheme();
    const contenedor = {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap:"50px",
        position: "relative",
        "@media (max-width: 768px) ": {
            height: "300px",
            gap: "10px",
            "& h1": {
                fontSize: "40px"
            },
            "& h5": {
                fontSize: "25px"
            }
        }
    };


    return <Box component="div" sx={contenedor}>
        <Box component="div">
            <Typography variant="h5" sx={tema.typography.basic.h5}>Hola! Soy...</Typography>
            <Typography variant="h1" sx={tema.typography.basic.h1}>Lorenzo Chavez</Typography>
            <Typography variant="h5" sx={tema.typography.basic.h5}>Desarrollador Front-End</Typography>
        </Box>
        <Typography variant="p" sx={tema.typography.basic.p}>Soy un apasionado programador web que le gusta trabajar en equipo, organizado y muy responsable. Me gustaría crecer y desarrollarme en un entorno donde se me desafíe y poner a prueba mis conocimientos. Siempre estoy dispuesto a aprender nuevas tecnologías y ampliar mis habilidades técnicas.
        </Typography>
    </Box>
};

export default Informacion;