import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";
import SkillsContainer from "./SkillsContainer";
import {Fade} from "react-awesome-reveal";


const Tecnologias = () => {
    const tema = useTheme();
    const FrontEnd = [
        {
            name: "HTML",
            icon: "https://img.icons8.com/color/48/html-5--v1.png",
            color: "orange"
        },
        {
            name: "CSS",
            icon: "https://img.icons8.com/color/48/css3.png",
            color: "deepskyblue"
        },
        {
            name: "JS",
            icon: "https://img.icons8.com/color/48/javascript--v1.png",
            color: "yellow"
        },
        {
            name: "React JS",
            icon: "https://img.icons8.com/color/48/react-native.png",
            color: "deepskyblue"
        },
        {
            name: "MUI",
            icon: "https://img.icons8.com/color/48/material-ui.png",
            color: "deepskyblue"
        },
    ];
    const BackEnd = [
        {
            name: "Java",
            icon: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
            color: "tomato"
        },
        {
            name: "MySQL",
            icon: "https://img.icons8.com/color/48/my-sql.png",
            color: "gray"
        },
    ];
    const DiseñoUX = [
        {
            name: "Figma",
            icon: "https://img.icons8.com/color/48/figma--v1.png",
            color: "darkorchid"
        },
    ];

    const style = {
        width: "100%",
        height: "130vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3.25rem",
        gap: "20px"
    }

    return <Box sx={style} component="section" id="Skills">
        <Fade direction="down" delay="50" triggerOnce>
            <Typography variant="h1" sx={tema.typography.basic.h1}>Tecnologías</Typography>
        </Fade>
        <SkillsContainer list={FrontEnd} category="Front-End"/>
        <SkillsContainer list={BackEnd} category="Back-End"/>
        <SkillsContainer list={DiseñoUX} category="Diseño UX/UI"/>
    </Box>
};

export default Tecnologias;