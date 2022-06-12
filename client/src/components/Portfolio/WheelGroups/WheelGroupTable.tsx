import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { WheelGroupTableRow } from './WheelGroupTableRow'

export const WheelGroupTable = () => {
  const data = [
    {
      name: 'SPY',
      value: '$10,432.11',
    },
    {
      name: 'ARKK',
      value: '$7,895.00',
    },
    {
      name: 'PLTR',
      value: '$1,042.66',
    },
  ]

  return (
    <TableContainer component={Paper} sx={{ mt: 5 }} elevation={4}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((datum) => (
            <WheelGroupTableRow key={datum.name} data={datum} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
