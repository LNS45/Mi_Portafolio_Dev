import { Drawer, Typography } from "@mui/material";
import "./style.css"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from "@emotion/react";
import Divider from '@mui/material/Divider';
import Link from "@mui/material/Link";


const Menu = (props) => {
    const menuActive = props.menu;
    const tema = useTheme();
    const menuStyle = {
        zIndex: 1,
        '& .MuiDrawer-paper': {
            background: tema.palette.secondary.main,
            width: "200px",
            position: "fixed",
            top: "3.75rem",
            color: tema.palette.secondary.contrastText,
        },
    };
    const letraStyle = {
        fontFamily: tema.typography.basic.fontFamily,
        fontWeight: tema.typography.menu.fontWeight,
        fontSize: tema.typography.menu.fontSize,
    }
    const listStyle = {
        "& a": {
            textDecoration: "none",
            color: tema.palette.primary.main
        },
    };
    const interactiveAnimation = {
        transition: ".2s",
        "&::before": {
            content: `""`,
            width: "0%",
            height: "2px",
            background: tema.palette.primary.main,
            position:"absolute",
            bottom: "0",
            left: "0",
            transition: ".5s",
            borderRadius: "2px",
        },
        "&:hover::before": {
            content: `""`,
            width: "100%",
            height: "2px",
            background: tema.palette.primary.main,
            position:"absolute",
            bottom: "0",
            left: "0",
        },
        "&:after": {
            content: `""`,
            width: "0%",
            height: "2px",
            background: tema.palette.primary.main,
            position:"absolute",
            top: "0",
            right: "0",
            transition: ".5s",
            borderRadius: "2px",
        },
        "&:hover::after": {
            content: `""`,
            width: "100%",
            height: "2px",
            background: tema.palette.primary.main,
            position:"absolute",
            top: "0",
            right: "0"
        },

    }

    return <Drawer type="left" anchor="left" open={menuActive} variant='temporary' sx={menuStyle} hideBackdrop={true}>
        <List sx={listStyle}>
            <ListItemButton sx={interactiveAnimation}>
                <ListItem>
                    <ListItemIcon>
                        <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Inicio</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton sx={interactiveAnimation}>
                <ListItem>
                    <ListItemIcon>
                        <ComputerOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Habilidades</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton sx={interactiveAnimation}>
                <ListItem>
                    <ListItemIcon>
                        <SchoolOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Educación</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton sx={interactiveAnimation}>
                <ListItem>
                    <ListItemIcon>
                        <WorkOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Experiencia</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton sx={interactiveAnimation}>
                <ListItem>
                    <ListItemIcon>
                        <ContactPhoneOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Contacto</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton sx={interactiveAnimation}>
                <ListItem>
                    <ListItemIcon>
                        <ArticleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>CV</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
        </List>
        <Divider />
        <List sx={listStyle}>
            <ListItemButton>
                <Link href="https://github.com/LNS45" sx={interactiveAnimation}>
                    <ListItem>
                        <ListItemIcon sx={{color: tema.palette.primary.main}}>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography sx={letraStyle}>GitHub</Typography>
                            </ListItemText>
                    </ListItem>
                </Link>
            </ListItemButton>
            <ListItemButton >
                <Link href="https://www.linkedin.com/in/lorenzo-chavez-ingsc/" sx={interactiveAnimation}>
                    <ListItem>
                        <ListItemIcon sx={{color: tema.palette.primary.main}}>
                            <LinkedInIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography sx={letraStyle}>LinkedIn</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
            </ListItemButton>
        </List> 
    </Drawer>
};

export default Menu;