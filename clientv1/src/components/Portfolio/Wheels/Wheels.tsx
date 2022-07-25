import { Box, Paper } from '@mui/material'
import { Wheel } from './Wheel'

export const Wheels = () => {
  const data = [
    {
      name: 'SPY - abc1',
      value: '$12,785.00',
      activeContracts: [
        {
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          quantity: 2,
        },
        {
          premium: '$120',
          strike: '$470',
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
        {
          premium: '$120',
          strike: '$440',
          closingDate: '10/10/2022',
          quantity: 1,
        },
        {
          premium: '$110',
          strike: '$420',
          closingDate: '10/03/2022',
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
        {
          premium: '$110',
          strike: '$420',
          closingDate: '10/03/2022',
          quantity: 1,
        },
      ],
    },
  ]

  return (
    <Box>
      {data.map((datum) => (
        <Wheel key={datum.name} data={datum}></Wheel>
      ))}
    </Box>
  )
}
