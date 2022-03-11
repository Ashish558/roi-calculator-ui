
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import Home from './pages/home'


const App = () => {

   const theme = createTheme({
      palette: {
         background: {
            yellow: {
               light: '#FFF9AA',
               dark: '#FAC200'
            },
         },
         color: {
            gray: '#A3A3A3'
         }
      },
      typography: {
         fontFamily: [
            "Poppins",
            "Helvetica Neue",
            "Arial",
            "sans-serif"
         ].join(",")
      },

   })

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <CssBaseline />

         <Home />

      </ThemeProvider>
   )
}


export default App
