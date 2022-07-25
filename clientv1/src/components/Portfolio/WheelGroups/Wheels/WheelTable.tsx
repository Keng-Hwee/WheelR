import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { WheelTableRow } from './WheelTableRow'

type WheelDataType = {
  premium: string
  strike: string
  closingDate: string
  quantity: number
}

export const WheelTable = (props: { data: WheelDataType[] }) => {
  console.log(props)

  const data = props.data
  console.log(data)

  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 0 }}
      elevation={4}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Strike Price</TableCell>
            <TableCell>Premium</TableCell>
            <TableCell>Closing Date</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((datum) => (
            <WheelTableRow key={datum.strike} data={datum} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
