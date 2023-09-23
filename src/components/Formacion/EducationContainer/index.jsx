import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";
import {Fade} from "react-awesome-reveal";

const EducationContainer = ({info}) => {
    const tema = useTheme();
    const styleContainer = {
        width: "21.875em",
        height: "18.75em",
        background: tema.palette.primary.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
        gap: "10px",
        borderRadius: "20px",
        boxShadow: `inset 0px 1px 10px rgba(0,0,0, 0.5), inset 0px 2px 10px ${tema.palette.primary.dark}`,
        "& img": {
            width: "60%",
            height: "60%",
            borderRadius: "20px",
            marginBottom: "10px",
            boxShadow: `inset 0px 1px 10px rgba(0,0,0, 0.5), inset 0px 2px 10px ${tema.palette.primary.dark}`,
        }
    }
    
    return <Fade direction="down" delay="50" triggerOnce>
        <Box sx={styleContainer}>
            <img src={info.imagen} alt={`Logo de ${info.empresa}`}/>
            <Typography variant="h6" sx={tema.typography.basic.h6}>{info.titulo}</Typography>
            <Typography variant="p" sx={tema.typography.basic.p}>{info.fecha}</Typography>
        </Box>
    </Fade>
};

export default EducationContainer;