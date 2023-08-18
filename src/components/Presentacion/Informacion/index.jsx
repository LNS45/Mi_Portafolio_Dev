import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";
import {Fade} from "react-awesome-reveal";
const Informacion = () => {
    const tema = useTheme();
    const contenedor = {
        width: "40rem",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap:"3.125rem",
        position: "relative",
        "@media (max-width: 768px) ": {
            width: "22rem",
            height: "18.75rem",
            gap: "10px",
            "& h1": {
                fontSize: "40px"
            },
            "& h5": {
                fontSize: "25px"
            },
            "& p": {
                fontSize: "16"
            }
        }
    };


    return <Box component="div" sx={contenedor}>
        <Box component="div">
            <Fade cascade damping={0.9}>
                <Typography variant="h5" sx={tema.typography.basic.h5}>Hola! Soy...</Typography>
                <Typography variant="h1" sx={tema.typography.basic.h1}>Lorenzo Chavez</Typography>
                <Typography variant="h5" sx={tema.typography.basic.h5}>Desarrollador Front-End</Typography>
            </Fade>
        </Box>
        <Fade delay="300">
            <Typography variant="p" sx={tema.typography.basic.p}>Soy un apasionado programador web que le gusta trabajar en equipo, organizado y muy responsable. Me gustaría crecer y desarrollarme en un entorno donde se me desafíe y poner a prueba mis conocimientos. Siempre estoy dispuesto a aprender nuevas tecnologías y ampliar mis habilidades técnicas.
            </Typography>

        </Fade>
    </Box>
};

export default Informacion;