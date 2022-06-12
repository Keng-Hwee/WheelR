import { createTheme, ThemeProvider } from '@mui/material'
import { createContext, useContext, useMemo, useState } from 'react'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {
    //do nothing
  },
})

export const AppTheme = ({ children }: Props) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        )
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
