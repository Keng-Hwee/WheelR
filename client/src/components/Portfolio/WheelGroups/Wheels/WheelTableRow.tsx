import {
  Button,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import React from 'react'

type WheelDataType = {
  premium: string
  strike: string
  closingDate: string
  quantity: number
}

export const WheelTableRow = (props: { data: WheelDataType }) => {
  const row = props.data
  console.log(row)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>{row.strike}</TableCell>
        {/* <TableCell sx={{ border: 'none' }}>{row.strike}</TableCell> */}
        <TableCell>{row.premium}</TableCell>
        <TableCell>{row.closingDate}</TableCell>
        <TableCell>{row.quantity}</TableCell>
        <TableCell align="right">
          <Button variant="contained" color="primary">
            Close
          </Button>
          &nbsp;
          <Button variant="contained" color="secondary">
            Roll
          </Button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
