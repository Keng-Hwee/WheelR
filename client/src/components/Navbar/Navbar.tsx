import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { ThemeSwitch } from './ThemeSwitch'
import { UserOptionMenu } from './UserOptionMenu'

export const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography
          color="primary"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          WHEELR
        </Typography>
        <UserOptionMenu></UserOptionMenu>
        <ThemeSwitch></ThemeSwitch>
      </Toolbar>
    </AppBar>
  )
}
