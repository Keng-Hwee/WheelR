import { ChakraProvider, theme } from '@chakra-ui/react'
import { Navbar } from './components/Navbar/Navbar'
import { Portfolio } from './components/Portfolio/Portfolio'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar></Navbar>
    <Portfolio></Portfolio>
  </ChakraProvider>
)
