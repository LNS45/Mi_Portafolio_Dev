import './App.css'
import Presentacion from './components/Presentacion'
import Barra from './components/Barra'
import { ThemeProvider } from '@mui/material'
import temas from './ThemeProvider'
import { useState } from 'react'

function App() {
  const temaClaro = temas[0];
  const temaOscuro = temas[1];
  let [tema, setTema] = useState(temaClaro);

  //Color del body dependiendo del Tema
  document.body.style.background = tema.palette.primary.light;

  return (
    <>
      <ThemeProvider theme={tema}>
        <Barra />
        <Presentacion />
      </ThemeProvider>
    </>
  )
}

export default App
