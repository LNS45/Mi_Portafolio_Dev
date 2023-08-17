import { Box, Container } from "@mui/material";
import Informacion from "./Informacion";
import Foto from "./Foto/Foto";


const Presentacion = () => {
    
    
    const stylesBox = {
        background: 'url("https://i0.wp.com/www.andro-life.com/wp-content/uploads/2017/08/Wallpaper-1.jpg?ssl=1")',
        width: '100%',
        height: "100vh", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        top: "0", 
        position: "relative", 
        opacity: "1",
        backgroundAttachment: "fixed",
        padding: "0",
        margin: "0",
        zIndex: "1",
    };
    const stylesBoxFilter = { 
        width: '100vw', 
        height: "100vh", 
        padding: "0px", 
        position: "relative", 
        background: "linear-gradient(rgba(255,255,255, 0.1), rgba(0,0,0, .8) 80%)", 
        zIndex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "Center",

    };
    const stylesContainer = {
        height:"calc(100vh - 3.75rem)", 
        width: "100%", 
        margin: "0", 
        position: "absolute", 
        top: "3.75em",
        boxSizing: "border-box",
        padding: "3.75em 3.75em",
        display: "flex",
        aligntItems: "center",
        justifyContent: "space-around",
        fontSize: "1rem",
        "& img": {
            width: "25em",
            height: "25em",
            borderRadius: "100%",
            boxShadow: "1px 1px 10px rgba(0,0,0,0.9)",
            zIndex: "2"
        },
        '@media (max-width: 768px)':{
            flexDirection: "column",
            alignItems: "center",
            padding: "0px 10px",
            '& img': {
                width: "285px",
                height: "285px",
            }
        }
    };

    return <Box component="section" sx={stylesBox}>
        <Box component={'div'} sx={stylesBoxFilter}> 
            <Container component={'div'} sx={stylesContainer} maxWidth={false} disableGutters={true}>
                <Informacion />
                <Foto />
            </Container>
        </Box>
    </Box>
};

export default Presentacion;
