import { IconButton } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

export const UserOptionMenu = () => {
  return (
    <IconButton
      color="primary"
      aria-label="Light Theme"
      component="span"
    >
      <PersonIcon />
    </IconButton>
  )
}
