import { Box } from "@mui/material";



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
        opacity: '100%'
    };
    const stylesBoxFilter = { 
        width: '100vw', 
        height: "100vh", 
        padding: "0px", 
        position: "relative", 
        background: "linear-gradient(white, black 90%)", 
        opacity: "50%"
    };

    return <Box component="section" sx={stylesBox}>
        <Box component={'div'} sx={stylesBoxFilter}/>
    </Box>
};

export default Presentacion;
