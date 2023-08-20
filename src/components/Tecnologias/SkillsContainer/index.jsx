import { Box } from "@mui/material"
import Skill from "./Skill"
import {useTheme} from "@mui/material";

const SkillsContainer = ({list}) => {
    const tema = useTheme();
    const styleContainer = {
        background: tema.palette.primary.dark, 
        width: "450px", 
        height: "200px",
        display: "flex",
        flexWrap: "wrap",
        gap: "3.125em",
        padding: "20px",
        boxSizing: "border-box",
        borderRadius: "20px"
    }
    return <Box sx={styleContainer}>
        {list.map((skill, index) => (
            <Skill skill={skill} key={index}/>
        ))}
    </Box>
}

export default SkillsContainer