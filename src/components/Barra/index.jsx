import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Switch from '@mui/material/Switch';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';


const Barra = () => {


    return <AppBar color='primary' sx={{height: 'auto', opacity: '100%', background: "rgba(0,0,0,0.6)"} }>
        <Toolbar variant='regular' sx={{justifyContent: "space-between"}}>
            <IconButton size='large' color='primary'>
                <MenuIcon />
                
            </IconButton>
            <Switch icon= {<WbSunnyOutlinedIcon />} checkedIcon={<Brightness2OutlinedIcon />}/>
        </Toolbar>
    </AppBar>
};

export default Barra;