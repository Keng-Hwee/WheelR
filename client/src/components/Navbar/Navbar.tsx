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
    // <Box m={5}>
    //   <Flex minWidth="max-content" alignItems="center" gap="2">
    //     <Box p="2">
    //       <Heading size="md">WheelR App</Heading>
    //     </Box>
    //     <Spacer />
    //     <ButtonGroup>
    //       <UserOptionMenu></UserOptionMenu>
    //       <ColorModeSwitcher justifySelf="flex-end" />
    //     </ButtonGroup>
    //   </Flex>
    // </Box>

    // <Box>
    //   <Stack
    //     direction="row"
    //     spacing={2}
    //     justifyContent="space-between"
    //   >
    //     <div>WHEELR</div>
    //     <div>
    //       <p>TESTESTEST</p>
    //       <UserOptionMenu></UserOptionMenu>
    //     </div>
    //   </Stack>
    // </Box>

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
