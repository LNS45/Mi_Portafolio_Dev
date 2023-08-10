import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";



const Presentacion = () => {
    const tema = useTheme();
    
    const stylesBox = {
        background: 'url("https://img.freepik.com/foto-gratis/planeta-ficticio-cielo-nocturno-colorido-estrellas-nebulosa_1048-7926.jpg?w=1800&t=st=1691707094~exp=1691707694~hmac=741030e81ba8619274ef668b8e7d0aab30ee15d148f5e78e4fcddf24d7613a84")',
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
        background: "linear-gradient(black, aqua, black 80%)", 
        opacity: "20%"
    };

    return <Box component="section" sx={stylesBox}>
        <Box component={'div'} sx={stylesBoxFilter}/>
    </Box>
};

export default Presentacion;
