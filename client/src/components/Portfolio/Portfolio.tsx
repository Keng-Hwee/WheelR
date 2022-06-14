import { Box, Paper } from '@mui/material'
import { PortfolioPerformanceStats } from './PortfolioPerformanceStats/PortfolioPerformanceStats'
import { WheelGroupTable } from './WheelGroups/WheelGroupTable'

export const Portfolio = () => {
  return (
    <Box>
      <PortfolioPerformanceStats></PortfolioPerformanceStats>
      <WheelGroupTable></WheelGroupTable>
    </Box>
  )
}
