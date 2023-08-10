import { Drawer } from "@mui/material";
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

const Menu = () => {


    return <Drawer type="left" anchor="left" open='true' variant='temporary' color="primary">;
        <List >
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inicio"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <ComputerOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Habilidades"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <SchoolOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Educación"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <WorkOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Experiencia"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <ContactPhoneOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contacto"/>
                </ListItem>
            </ListItemButton>
            <ListItemButton>
                <ListItem>
                    <ListItemIcon>
                        <ArticleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="CV"/>
                </ListItem>
            </ListItemButton>
        </List>
    </Drawer>
};

export default Menu;