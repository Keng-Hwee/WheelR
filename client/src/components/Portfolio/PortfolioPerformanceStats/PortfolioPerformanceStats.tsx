import {
  Box,
  Flex,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react'

export const PortfolioPerformanceStats = () => {
  const portfolioValue = '72,678.21'

  return (
    <div>
      <Box w="50vw" m="auto auto" p="3px 10px 15px 10px">
        <Text fontSize="xs" fontWeight="bold" color="gray.500">
          PORTFOLIO VALUE
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          ${portfolioValue}
        </Text>
      </Box>
    </div>
  )
}
