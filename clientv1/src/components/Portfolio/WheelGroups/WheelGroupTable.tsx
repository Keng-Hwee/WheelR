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
      activeContracts: [
        {
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          quantity: 1,
        },
        {
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          quantity: 1,
        },
      ],
    },
    {
      name: 'ARKK',
      value: '$7,895.00',
      activeContracts: [
        {
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          quantity: 1,
        },
      ],
    },
    {
      name: 'PLTR',
      value: '$1,042.66',
      activeContracts: [
        {
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          quantity: 1,
        },
        {
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          quantity: 1,
        },
      ],
    },
  ]

  return (
    <TableContainer component={Paper} sx={{ mt: 5 }} elevation={4}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Status</TableCell>
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
