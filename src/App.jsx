import './App.css'
import Presentacion from './components/Presentacion'
import Barra from './components/Barra'
import { ThemeProvider } from '@mui/material'
import temas from './ThemeProvider'
import { useState } from 'react'
import Menu from './components/Menu'

function App() {
  //Tema claro por defecto
  let [tema, setTema] = useState(temas[0]);
  const [menuActive, setMenuActive] = useState(false);

  //Color del body dependiendo del Tema
  document.body.style.background = tema.palette.primary.light;

  return (
    <>
      <ThemeProvider theme={tema}>
        <Barra handleMenu={{setMenuActive, menuActive}} handleTheme={{tema, setTema}}/>
        <Menu menu={menuActive}/>
        <Presentacion />
      </ThemeProvider>
    </>
  )
}

export default App
