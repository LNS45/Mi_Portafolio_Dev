import { Box } from "@mui/material"
import Skill from "./Skill"
import {useTheme} from "@mui/material";
import {Fade} from "react-awesome-reveal";

const SkillsContainer = ({list, category}) => {
    const tema = useTheme();
    const styleContainer = {
        background: tema.palette.primary.other, 
        width: "28.125em", 
        height: "auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "1.25rem",
        boxSizing: "border-box",
        borderRadius: "1.25rem",
        minHeight: "12.5rem",
        position: "relative",
        "&::before": {
            content: `'${category}'`,
            width: "100%",
            height: "100%",
            background: tema.palette.primary.other,
            position: "absolute",
            left: 0,
            top: 0,
            borderRadius: "1.25rem",
            zIndex: 2,
            fontSize: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "1s",
            boxShadow: `inset 0px 1px 10px rgba(0,0,0, 0.5), inset 0px 2px 10px ${tema.palette.primary.dark}`,
            color: tema.palette.primary.contrastText,
            textShadow: "1px 1px 1px black"
        },
        "&:hover::before": {
            content: "''",
            width: "0px"
        },
        '@media (max-width: 768px)':{
            "&": {
                fontSize: "12px"
            },
        }
    }
    return <Fade direction="right" delay="50" triggerOnce>
        <Box sx={styleContainer}>
            {list.map((skill, index) => (
                <Skill skill={skill} key={index}/>
            ))}
        </Box>
    </Fade>
}

export default SkillsContainer