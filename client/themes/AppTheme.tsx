import { createTheme, ThemeProvider } from '@mui/material'
import { createContext, useMemo, useState } from 'react'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

declare module '@mui/material/styles/createPalette' {
  export interface ColorVariance {
    0: string
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
  }

  export interface PaletteOptions {
    red: ColorVariance
    pink: ColorVariance
    purple: ColorVariance
    violet: ColorVariance
    indigo: ColorVariance
    blue: ColorVariance
    cyan: ColorVariance
    teal: ColorVariance
    green: ColorVariance
    lime: ColorVariance
    yellow: ColorVariance
    orange: ColorVariance
    neutral: ColorVariance
    blueNeutral: ColorVariance
  }
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
          red: {
            0: 'hsl(0, 65%, 97%)',
            1: 'hsl(0, 65%, 92%)',
            2: 'hsl(0, 65%, 86%)',
            3: 'hsl(0, 65%, 77%)',
            4: 'hsl(0, 65%, 68%)',
            5: 'hsl(0, 65%, 59%)',
            6: 'hsl(0, 65%, 50%)',
            7: 'hsl(0, 65%, 41%)',
            8: 'hsl(0, 65%, 32%)',
            9: 'hsl(0, 65%, 23%)',
          },
          pink: {
            0: 'hsl(339, 65%, 97%)',
            1: 'hsl(339, 65%, 92%)',
            2: 'hsl(339, 65%, 86%)',
            3: 'hsl(339, 65%, 77%)',
            4: 'hsl(339, 65%, 68%)',
            5: 'hsl(339, 65%, 59%)',
            6: 'hsl(339, 65%, 50%)',
            7: 'hsl(339, 65%, 41%)',
            8: 'hsl(339, 65%, 32%)',
            9: 'hsl(339, 65%, 23%)',
          },
          purple: {
            0: 'hsl(288, 65%, 97%)',
            1: 'hsl(288, 65%, 94%)',
            2: 'hsl(288, 65%, 86%)',
            3: 'hsl(288, 65%, 77%)',
            4: 'hsl(288, 65%, 68%)',
            5: 'hsl(288, 65%, 59%)',
            6: 'hsl(288, 65%, 50%)',
            7: 'hsl(288, 65%, 41%)',
            8: 'hsl(288, 65%, 32%)',
            9: 'hsl(288, 65%, 23%)',
          },
          violet: {
            0: 'hsl(255, 65%, 97%)',
            1: 'hsl(255, 65%, 92%)',
            2: 'hsl(255, 65%, 86%)',
            3: 'hsl(255, 65%, 77%)',
            4: 'hsl(255, 65%, 68%)',
            5: 'hsl(255, 65%, 59%)',
            6: 'hsl(255, 65%, 50%)',
            7: 'hsl(255, 65%, 41%)',
            8: 'hsl(255, 65%, 32%)',
            9: 'hsl(255, 65%, 23%)',
          },
          indigo: {
            0: 'hsl(230, 65%, 97%)',
            1: 'hsl(230, 65%, 92%)',
            2: 'hsl(230, 65%, 86%)',
            3: 'hsl(230, 65%, 77%)',
            4: 'hsl(230, 65%, 68%)',
            5: 'hsl(230, 65%, 59%)',
            6: 'hsl(230, 65%, 50%)',
            7: 'hsl(230, 65%, 41%)',
            8: 'hsl(230, 65%, 32%)',
            9: 'hsl(230, 65%, 23%)',
          },
          blue: {
            0: 'hsl(208, 65%, 97%)',
            1: 'hsl(208, 65%, 92%)',
            2: 'hsl(208, 65%, 87%)',
            3: 'hsl(208, 65%, 79%)',
            4: 'hsl(208, 65%, 70%)',
            5: 'hsl(208, 65%, 61%)',
            6: 'hsl(208, 65%, 50%)',
            7: 'hsl(208, 65%, 41%)',
            8: 'hsl(208, 65%, 32%)',
            9: 'hsl(208, 65%, 23%)',
          },
          cyan: {
            0: 'hsl(188, 65%, 97%)',
            1: 'hsl(188, 65%, 92%)',
            2: 'hsl(188, 65%, 86%)',
            3: 'hsl(188, 65%, 77%)',
            4: 'hsl(188, 65%, 68%)',
            5: 'hsl(188, 65%, 59%)',
            6: 'hsl(188, 65%, 50%)',
            7: 'hsl(188, 65%, 41%)',
            8: 'hsl(188, 65%, 32%)',
            9: 'hsl(188, 65%, 23%)',
          },
          teal: {
            0: 'hsl(162, 65%, 97%)',
            1: 'hsl(162, 65%, 92%)',
            2: 'hsl(162, 65%, 86%)',
            3: 'hsl(162, 65%, 77%)',
            4: 'hsl(162, 65%, 68%)',
            5: 'hsl(162, 65%, 59%)',
            6: 'hsl(162, 65%, 50%)',
            7: 'hsl(162, 65%, 41%)',
            8: 'hsl(162, 65%, 32%)',
            9: 'hsl(162, 65%, 23%)',
          },
          green: {
            0: 'hsl(131, 60%, 97%)',
            1: 'hsl(131, 60%, 92%)',
            2: 'hsl(131, 60%, 86%)',
            3: 'hsl(131, 60%, 77%)',
            4: 'hsl(131, 60%, 68%)',
            5: 'hsl(131, 60%, 59%)',
            6: 'hsl(131, 60%, 50%)',
            7: 'hsl(131, 60%, 41%)',
            8: 'hsl(131, 60%, 32%)',
            9: 'hsl(131, 60%, 23%)',
          },
          lime: {
            0: 'hsl(85, 60%, 97%)',
            1: 'hsl(85, 60%, 92%)',
            2: 'hsl(85, 60%, 86%)',
            3: 'hsl(85, 60%, 77%)',
            4: 'hsl(85, 60%, 68%)',
            5: 'hsl(85, 60%, 59%)',
            6: 'hsl(85, 60%, 50%)',
            7: 'hsl(85, 60%, 41%)',
            8: 'hsl(85, 60%, 32%)',
            9: 'hsl(85, 60%, 23%)',
          },
          yellow: {
            0: 'hsl(39, 80%, 97%)',
            1: 'hsl(39, 80%, 92%)',
            2: 'hsl(39, 80%, 86%)',
            3: 'hsl(39, 80%, 77%)',
            4: 'hsl(39, 80%, 68%)',
            5: 'hsl(39, 80%, 59%)',
            6: 'hsl(39, 80%, 50%)',
            7: 'hsl(39, 80%, 41%)',
            8: 'hsl(39, 80%, 32%)',
            9: 'hsl(39, 80%, 23%)',
          },
          orange: {
            0: 'hsl(24, 80%, 97%)',
            1: 'hsl(24, 80%, 92%)',
            2: 'hsl(24, 80%, 86%)',
            3: 'hsl(24, 80%, 77%)',
            4: 'hsl(24, 80%, 68%)',
            5: 'hsl(24, 80%, 59%)',
            6: 'hsl(24, 80%, 50%)',
            7: 'hsl(24, 80%, 41%)',
            8: 'hsl(24, 80%, 32%)',
            9: 'hsl(24, 80%, 23%)',
          },
          neutral: {
            0: 'hsl(0, 0%, 98%)',
            1: 'hsl(0, 0%, 93%)',
            2: 'hsl(0, 0%, 86%)',
            3: 'hsl(0, 0%, 77%)',
            4: 'hsl(0, 0%, 68%)',
            5: 'hsl(0, 0%, 59%)',
            6: 'hsl(0, 0%, 50%)',
            7: 'hsl(0, 0%, 41%)',
            8: 'hsl(0, 0%, 32%)',
            9: 'hsl(0, 0%, 23%)',
          },
          blueNeutral: {
            0: 'hsl(212, 30%, 97%)',
            1: 'hsl(212, 30%, 92%)',
            2: 'hsl(212, 30%, 88%)',
            3: 'hsl(212, 30%, 79%)',
            4: 'hsl(212, 30%, 69%)',
            5: 'hsl(212, 30%, 60%)',
            6: 'hsl(212, 30%, 51%)',
            7: 'hsl(212, 30%, 41%)',
            8: 'hsl(212, 30%, 31%)',
            9: 'hsl(212, 30%, 23%)',
          },
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
