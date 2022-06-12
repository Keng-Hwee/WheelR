import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'
import { Navbar } from './components/Navbar/Navbar'

import { Portfolio } from './components/Portfolio/Portfolio'
import { WheelGroupTable } from './components/Portfolio/WheelGroups/WheelGroupTable'

export const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar></Navbar>
    </ThemeProvider>
  )
  // <Portfolio></Portfolio>
  // <WheelGroupTable></WheelGroupTable>
}
