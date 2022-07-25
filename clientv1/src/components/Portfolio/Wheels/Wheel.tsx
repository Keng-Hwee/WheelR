import { Paper, Typography } from '@mui/material'

type WheelData = {
  name: string
  value: string
  activeContracts: Contracts[]
}

type Contracts = {
  premium: string
  strike: string
  closingDate: string
  quantity: number
}

export const Wheel = (props: { data: WheelData }) => {
  const wheelData = props.data

  return (
    <Paper>
      <Typography>TEST</Typography>
    </Paper>
  )
}
