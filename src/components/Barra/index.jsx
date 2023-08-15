import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Switch from '@mui/material/Switch';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import hexToRgba from 'hex-to-rgba';
import { useTheme } from '@emotion/react';
import temas from '../../ThemeProvider';


const Barra = ({handleMenu, handleTheme}) => {
    const tema = useTheme();
    const colorOpaco = hexToRgba(tema.palette.primary.main, .5)
    const appBarStyle = {
        height: "3.75rem",
        background: colorOpaco,
        zIndex: 2,
    };
    const botonTemaStyle = {
        width: "60px",
        height: "40px",
        '& .MuiSwitch-thumb': {
            width: "18px",
            height: "18px",
        },
        '& .MuiSwitch-track': {
            width:" 100%",
            height: "100%"
        },
        '& .MuiSwitch-input:': {
            width: '100%'
        }
    };
    const iconStyle = {
        width: "22px",
        height: "22px"
    };
    const menuBotonAnimation = {
        transition: ".5s",
        "&:hover":{
            transform: "scale(1.2)",
            rotate: "180deg",
        }
    };
    return <AppBar color='primary' sx={ appBarStyle }>
        <Toolbar variant='regular' sx={{justifyContent: "space-between", }}>
            <IconButton size='large' color='secondary' onClick={() => handleMenu.setMenuActive(!handleMenu.menuActive)} sx={menuBotonAnimation}>
                <MenuIcon />
            </IconButton>
            <Switch icon={<WbSunnyOutlinedIcon  sx={iconStyle}/>} checkedIcon={<Brightness2OutlinedIcon sx={iconStyle}/>} onClick={() => handleTheme.setTema((prevTheme) => prevTheme === temas[0] ? 
            temas[1]: temas[0])} color='secondary' sx={botonTemaStyle}/>
        </Toolbar>
    </AppBar>
};

export default Barra;