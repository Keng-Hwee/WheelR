import { IconButton } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'

export const ThemeSwitch = () => {
  return (
    <IconButton
      color="primary"
      aria-label="Light Theme"
      component="span"
    >
      <WbSunnyIcon />
    </IconButton>
  )
}
