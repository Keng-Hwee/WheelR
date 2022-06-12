import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { WheelTable } from './Wheels/WheelTable'

type WheelGroupDataType = {
  name: string
  value: string
  wheels: WheelDataType[]
}

type WheelDataType = {
  name: string
  premium: string
  strike: string
  closingDate: string
  closedDate: string | null
  quantity: number
  active: boolean
}

export const WheelGroupTableRow = (props: {
  data: WheelGroupDataType
}) => {
  const row = props.data
  const [open, setOpen] = useState(false)

  const activeWheels = row.wheels.filter(
    (wheel) => wheel.active === true
  )
  const inActiveWheels = row.wheels.filter(
    (wheel) => wheel.active === false
  )
  console.log(activeWheels)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.value}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <WheelTable data={row.wheels}></WheelTable>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
