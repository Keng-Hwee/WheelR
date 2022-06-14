import { Container, CssBaseline } from '@mui/material'
import { Navbar } from './components/Navbar/Navbar'

import { Portfolio } from './components/Portfolio/Portfolio'
import { WheelGroupTable } from './components/Portfolio/WheelGroups/WheelGroupTable'
import { AppTheme } from './components/Theme/AppTheme'

export const App = () => {
  return (
    <AppTheme>
      <CssBaseline />
      <Container maxWidth="xl">
        <Navbar></Navbar>
        <Portfolio></Portfolio>
      </Container>
    </AppTheme>
  )
}
