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
      wheels: [
        {
          name: 'SPY - abc1',
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          closedDate: null,
          quantity: 1,
          active: true,
        },
        {
          name: 'SPY - abc2',
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          closedDate: '10/10/2022',
          quantity: 1,
          active: true,
        },
        {
          name: 'SPY - abc3',
          premium: '$110',
          strike: '$420',
          closingDate: '10/03/2022',
          closedDate: '10/03/2022',
          quantity: 1,
          active: false,
        },
      ],
    },
    {
      name: 'ARKK',
      value: '$7,895.00',
      wheels: [
        {
          name: 'ARKK - abc1',
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          closedDate: null,
          quantity: 1,
          active: true,
        },
        {
          name: 'ARKK - abc2',
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          closedDate: '10/10/2022',
          quantity: 1,
          active: true,
        },
        {
          name: 'ARKK - abc3',
          premium: '$110',
          strike: '$420',
          closingDate: '10/03/2022',
          closedDate: '10/03/2022',
          quantity: 1,
          active: false,
        },
      ],
    },
    {
      name: 'PLTR',
      value: '$1,042.66',
      wheels: [
        {
          name: 'ARKK - abc1',
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          closedDate: null,
          quantity: 1,
          active: true,
        },
        {
          name: 'ARKK - abc2',
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          closedDate: '10/10/2022',
          quantity: 1,
          active: true,
        },
        {
          name: 'ARKK - abc3',
          premium: '$110',
          strike: '$420',
          closingDate: '10/03/2022',
          closedDate: '10/03/2022',
          quantity: 1,
          active: false,
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
