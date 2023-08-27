import { Box } from "@mui/material"
import Skill from "./Skill"
import {useTheme} from "@mui/material";

const SkillsContainer = ({list}) => {
    const tema = useTheme();
    const styleContainer = {
        background: tema.palette.primary.other, 
        width: "28.125rem", 
        height: "auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "1.25rem",
        boxSizing: "border-box",
        borderRadius: "1.25rem",
        minHeight: "12.5rem",

    }
    return <Box sx={styleContainer}>
        {list.map((skill, index) => (
            <Skill skill={skill} key={index}/>
        ))}
    </Box>
}

export default SkillsContainer