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
  activeContracts: WheelDataType[]
}

type WheelDataType = {
  premium: string
  strike: string
  closingDate: string
  quantity: number
}

export const WheelGroupTableRow = (props: {
  data: WheelGroupDataType
}) => {
  const row = props.data
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.value}</TableCell>
        <TableCell>
          {row.activeContracts.length} Active Contracts
        </TableCell>
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
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{ backgroundColor: 'action.hover' }}
          >
            <Box sx={{ margin: 3 }}>
              <WheelTable data={row.activeContracts}></WheelTable>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
