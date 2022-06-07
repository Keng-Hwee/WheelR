import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './Logo'
import { Navbar } from './components/Navbar/Navbar'
import { Portfolio } from './components/Portfolio/Portfolio'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar></Navbar>
    <Portfolio></Portfolio>
  </ChakraProvider>
)
