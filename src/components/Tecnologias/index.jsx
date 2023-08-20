import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";
import SkillsContainer from "./SkillsContainer";


const Tecnologias = () => {
    const tema = useTheme();
    const FrontEnd = [
        {
            name: "HTML",
            icon: "https://img.icons8.com/color/48/html-5--v1.png",
        },
        {
            name: "CSS",
            icon: "https://img.icons8.com/color/48/css3.png"
        },
        {
            name: "JS",
            icon: "https://img.icons8.com/color/48/javascript--v1.png"
        },
        {
            name: "React JS",
            icon: "https://img.icons8.com/color/48/react-native.png"
        },
        {
            name: "MUI",
            icon: "https://img.icons8.com/color/48/material-ui.png"
        },
    ];
    const BackEnd = [
        {
            name: "Java",
            icon: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
        },
        {
            name: "MySQL",
            icon: "https://img.icons8.com/color/48/my-sql.png"
        },
    ];
    const DiseñoUX = [
        {
            name: "Figma",
            icon: "https://img.icons8.com/color/48/figma--v1.png"
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
        <Typography variant="h1" sx={tema.typography.basic.h1}>Tecnologias</Typography>
        <SkillsContainer list={FrontEnd}/>
        <SkillsContainer list={BackEnd}/>
        <SkillsContainer list={DiseñoUX}/>
    </Box>
};

export default Tecnologias;