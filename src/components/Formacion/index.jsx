import { Box, Typography } from "@mui/material";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "@mui/material";
import EducationContainer from "./EducationContainer";

const Formacion = () => {
    const tema = useTheme();
    const formStyle = {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "3.125rem"
    };
    const styleContenedor = {
        display: "flex",
        gap: "9.375rem"
    }
    const cursos = [
        {
            titulo: "Ing. Sistemas Computacionales",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/1/19/UVEG_Logo.jpg",
            fecha: "Septiembre 2021 - En curso",
            empresa: "UVEG"
        },
        {
            titulo: "Especialización Front-End",
            imagen: "https://itconnect.lat/portal/wp-content/uploads/2023/03/Oracle-Next-Education--e1678304093153.png",
            fecha: "Diciembre 2022 - Junio 2023",
            empresa: "Oracle"
        },
    ];
    return <Box sx={formStyle} component={"section"}>
        <Fade direction="down" delay="50" triggerOnce>
            <Typography variant="h1" sx={tema.typography.basic.h1}>Formación</Typography>
        </Fade>
        <Box sx={styleContenedor}>
            <EducationContainer info={cursos[0]}/>
            <EducationContainer info={cursos[1]}/>
        </Box>
    </Box>

};

export default Formacion;