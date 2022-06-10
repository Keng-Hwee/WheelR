import {
  Badge,
  Icon,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

import { FaUser } from 'react-icons/fa'
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc'

import { WheelGroupTableRow } from './WheelGroupTableRow'

export const WheelGroupTable = () => {
  return (
    <TableContainer>
      <Table size="lg" variant="simple">
        <Tbody>
          <Tr>
            <Td>ARKK</Td>
            <Td isNumeric>$375.22</Td>
            <Td>
              <Badge colorScheme="green">
                <Icon as={VscTriangleUp} /> &nbsp; 10.2%
              </Badge>
            </Td>
            <Td>
              <IconButton
                size="m"
                fontSize="m"
                variant="ghost"
                color="current"
                icon={<Icon as={FaUser} />}
                aria-label={`Settings`}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>SPY</Td>
            <Td isNumeric>$3450.88</Td>
            <Td>
              <Badge colorScheme="green">
                <Icon as={VscTriangleUp} /> &nbsp; 10.2%
              </Badge>
            </Td>
            <Td>
              <IconButton
                size="m"
                fontSize="m"
                variant="ghost"
                color="current"
                icon={<Icon as={FaUser} />}
                aria-label={`Settings`}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>PLTR</Td>
            <Td isNumeric>$100.33</Td>
            <Td>
              <Badge colorScheme="red">
                <Icon as={VscTriangleDown} /> &nbsp; 9.7%
              </Badge>
            </Td>
            <Td>
              <IconButton
                size="m"
                fontSize="m"
                variant="ghost"
                color="current"
                icon={<Icon as={FaUser} />}
                aria-label={`Settings`}
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
