import { TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'

type WheelDataType = {
  name: string
  premium: string
  strike: string
  closingDate: string
  closedDate: string | null
  quantity: number
  active: boolean
}

export const WheelTableRow = (props: { data: WheelDataType }) => {
  const row = props.data
  console.log(row)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.strike}</TableCell>
        <TableCell>{row.premium}</TableCell>
        <TableCell>{row.closingDate}</TableCell>
        <TableCell>{row.quantity}</TableCell>
        <TableCell>
          {row.active ? (
            <Typography color="primary">Active</Typography>
          ) : (
            <Typography color="error">InActive</Typography>
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
