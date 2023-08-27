import './App.css'
import Presentacion from './components/Presentacion'
import Barra from './components/Barra'
import { ThemeProvider } from '@mui/material'
import temas from './ThemeProvider'
import { useState } from 'react'
import Menu from './components/Menu'
import Tecnologias from './components/Tecnologias'

function App() {
  //Tema claro por defecto
  let [tema, setTema] = useState(temas[0]);
  const [menuActive, setMenuActive] = useState(false);

  //Color del body dependiendo del Tema
  (tema === temas[0]) ? document.body.style.background = tema.palette.primary.light : document.body.style.background = tema.palette.primary.dark;

  return (
    <>
      <ThemeProvider theme={tema}>
        <Barra handleMenu={{setMenuActive, menuActive}} handleTheme={{tema, setTema}}/>
        <Menu menu={menuActive}/>
        <Presentacion tema={tema}/>
        <Tecnologias />
      </ThemeProvider>
    </>
  )
}

export default App
