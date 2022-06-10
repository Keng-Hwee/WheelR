import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { UserOptionMenu } from './UserOptionMenu'

export const Navbar = () => {
  return (
    <Box m={5}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">WheelR App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup>
          <UserOptionMenu></UserOptionMenu>
          <ColorModeSwitcher justifySelf="flex-end" />
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
