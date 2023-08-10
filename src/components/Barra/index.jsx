import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, Toolbar } from '@mui/material';

const Barra = () => {

    return <AppBar sx={{height: '50px'}}>
        <Toolbar>
        <MenuOutlinedIcon />
        </Toolbar>
    </AppBar>
};

export default Barra;