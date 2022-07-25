import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Typography } from '@mui/material'
import { AppTheme } from '../themes/AppTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppTheme>
      <Typography color="red.2" variant="h6" component="div">
        WHEELR
      </Typography>
      <Component {...pageProps} />
    </AppTheme>
  )
}

export default MyApp
