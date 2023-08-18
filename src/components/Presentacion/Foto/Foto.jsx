import { Box } from "@mui/material";
import imgPerfil from "../../../assets/img/perfil6.png";
import { useTheme } from '@emotion/react';
import './animation.css'

const Foto = () => {
    const tema = useTheme();

    const Container = {
        width: "25.3125rem",
        height: "25.3125rem",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 2,
        '@media (max-width: 768px)': {
            width: "18.125em",
            height: "18.125em"
        }
    };
    const animateContainer = {
        width: "25.3125em",
        height: "25.3125em",
        position: "absolute",
        background: `linear-gradient(${tema.palette.primary.main},${tema.palette.secondary.light} ,${tema.palette.secondary.main},${tema.palette.primary.main})`,
        borderRadius: "100%",
        zIndex: "1",
        '@media (max-width: 768px)': {
            width: "18.125em",
            height: "18.125em"
        }
    };
    
    return <Box sx={Container} component={"div"}>
        <img src={imgPerfil} />
        <Box sx={animateContainer} component={"div"} className="animation"/>
    </Box>
};

export default Foto;