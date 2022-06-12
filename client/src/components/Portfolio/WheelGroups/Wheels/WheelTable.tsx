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
  name: string
  premium: string
  strike: string
  closingDate: string
  closedDate: string | null
  quantity: number
  active: boolean
}

export const WheelTable = (props: { data: WheelDataType[] }) => {
  console.log(props)

  const data = props.data
  console.log(data)

  return (
    <TableContainer component={Paper} sx={{ mt: 5 }} elevation={4}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Strike Price</TableCell>
            <TableCell>Premium</TableCell>
            <TableCell>Closing Date</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((datum) => (
            <WheelTableRow key={datum.name} data={datum} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
