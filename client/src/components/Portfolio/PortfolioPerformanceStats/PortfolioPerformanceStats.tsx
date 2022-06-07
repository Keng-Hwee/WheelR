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
      <Box
        //borderRadius="7px"
        //backgroundColor="gray.700"
        w="50vw"
        m="auto auto"
        //border="1px"
        //borderColor="gray.600"
        p="3px 10px 15px 10px"
      >
        <Text color="whiteAlpha.700" fontWeight="light">
          PORTFOLIO VALUE
        </Text>
        <Stat textAlign="left" mt="10px">
          <StatNumber fontWeight="bold">${portfolioValue}</StatNumber>
        </Stat>
      </Box>
    </div>
  )
}
