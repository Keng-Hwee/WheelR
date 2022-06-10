import { SettingsIcon } from '@chakra-ui/icons'
import { Icon, IconButton } from '@chakra-ui/react'
import { FaRegUser, FaUser } from 'react-icons/fa'

export const UserOptionMenu = () => {
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      icon={<Icon as={FaUser} />}
      aria-label={`Settings`}
    />
  )
}
