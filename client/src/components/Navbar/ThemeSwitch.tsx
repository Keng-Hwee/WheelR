import { IconButton } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { useContext } from 'react'
import { ColorModeContext } from '../Theme/AppTheme'

export const ThemeSwitch = () => {
  const colorMode = useContext(ColorModeContext)

  return (
    <IconButton
      color="primary"
      aria-label="Light Theme"
      component="span"
      onClick={colorMode.toggleColorMode}
    >
      <WbSunnyIcon />
    </IconButton>
  )
}
