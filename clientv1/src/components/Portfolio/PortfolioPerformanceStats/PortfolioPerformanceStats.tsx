// import {
//   Box,
//   Flex,
//   Spacer,
//   Stat,
//   StatLabel,
//   StatNumber,
//   Text,
// } from '@chakra-ui/react'

import { Paper, Typography } from '@mui/material'

// export const PortfolioPerformanceStats = () => {
//   const portfolioValue = '72,678.21'

//   return (
//     <div>
//       <Box w="50vw" m="auto auto" p="3px 10px 15px 10px">
//         <Text fontSize="xs" fontWeight="bold" color="gray.500">
//           PORTFOLIO VALUE
//         </Text>
//         <Text fontSize="4xl" fontWeight="bold">
//           ${portfolioValue}
//         </Text>
//       </Box>
//     </div>
//   )
// }

export const PortfolioPerformanceStats = () => {
  return (
    <Paper elevation={4} sx={{ p: 2.5, mt: 4 }}>
      <Typography
        color="primary"
        variant="h6"
        sx={{ mb: 3, fontweight: 'light' }}
      >
        Portfolio Value
      </Typography>
      <Typography variant="h3">$72,888.22</Typography>
    </Paper>
  )
}
