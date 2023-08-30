import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";

const Skill = ({skill}) => {
    const tema = useTheme();

    const styleSkill = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "5.3125rem",
        height: "3.75rem",
        boxShadow:  `2px 2px 10px ${tema.palette.primary.dark},-2px -2px 2px ${tema.palette.primary.dark}`,
        borderRadius: '.625rem',
        padding: ".3125rem 0rem",
        background: tema.palette.primary.dark,
        position: "relative",
        zIndex: 1,
        textShadow: "1px 1px 1px black",
        color:"white",
        "& img": {
            width: "2.5em",
            height: "2.5em",
            filter: "drop-shadow(2px 2px 3px black)",
            transition: "1s",
        },
        "&::after": {
            content: "''",
            width:"100%",
            height:"100%",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: '10px',
            transition: ".5s",
            zIndex: -2
        },
        "&:hover": {
            "&": {
                color: `${skill.color}`,
                cursor: "pointer"
            },
            "& img": {
                transform: "scale(1.1) rotateY(360deg)",
                filter: `drop-shadow(2px 2px 1px ${skill.color})`,
            },
            "&::after": {
                boxShadow: `3px 3px 2px ${skill.color}, -1px -1px 5px white`,
            },
        }
    }

    return <Box component="div" sx={styleSkill} className="containerAnimation">
            <img src={skill.icon} alt={`Icono de ${skill.name}`}/>
            <Typography  sx={tema.typography.basic.subtitle1}>{skill.name}</Typography>
        </Box>
}

export default Skill;