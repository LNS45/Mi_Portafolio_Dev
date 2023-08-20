import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";

const Skill = ({skill}) => {
    const tema = useTheme();

    const styleSkill = {
        "& img": {
            width: "40px",
            height: "40px"
        }
    }

    return <Box component="div" sx={styleSkill}>
        <img src={skill.icon} alt={`Icono de ${skill.name}`}/>
        <Typography  sx={tema.typography.basic.subtitle1}>{skill.name}</Typography>
    </Box>
}

export default Skill;