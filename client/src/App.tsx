import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'
import { useContext } from 'react'
import { Navbar } from './components/Navbar/Navbar'

import { Portfolio } from './components/Portfolio/Portfolio'
import { WheelGroupTable } from './components/Portfolio/WheelGroups/WheelGroupTable'
import {
  AppTheme,
  ColorModeContext,
} from './components/Theme/AppTheme'

export const App = () => {
  return (
    <AppTheme>
      <CssBaseline />
      <Navbar></Navbar>
    </AppTheme>
  )
}
