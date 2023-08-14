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
import { useTheme } from "@emotion/react";


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
        fontFamily: tema.typography.fontFamily,
        fontWeight: tema.typography.fontWeight,
        fontSize: tema.typography.fontSize
    }

    return <Drawer type="left" anchor="left" open={menuActive} variant='temporary' sx={menuStyle} hideBackdrop={true}
    >
        <List>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Inicio</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <ComputerOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Habilidades</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <SchoolOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Educación</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <WorkOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Experiencia</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <ContactPhoneOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>Contacto</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <ArticleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText><Typography sx={letraStyle}>CV</Typography></ListItemText>
                </ListItem>
            </ListItemButton>
        </List>
    </Drawer>
};

export default Menu;