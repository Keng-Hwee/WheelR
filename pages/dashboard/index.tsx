import { Card } from '../../components/common/Card'
import PortfolioTrend from '../../components/dashboard/PortfolioTrend'
import PremiumCollected from '../../components/dashboard/PremiumCollected'
import StrategyList from '../../components/dashboard/StrategyList/StrategyList'
import {
  GetPortfolioForDashboardQuery,
  useGetPortfolioForDashboardQuery,
} from '../../graphql/generated/graphql-backend'
const Dashboard = () => {
  const { data, isLoading } = useGetPortfolioForDashboardQuery({
    portfolioId: 1,
  })

  if (isLoading) {
    return <div>LOADING!!!!!!</div>
  }

  if (data?.portfolio?.__typename === 'ApiError') {
    return <div>{data?.portfolio.message}</div>
  } else if (data?.portfolio?.__typename === 'Portfolio') {
    var test = data?.portfolio.strategies
  }

  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-center mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-6 mr-6 lg:w-[1440px]">
          <PortfolioTrend />
          <PremiumCollected />
          <div className="col-span-1 lg:col-span-2 w-auto">
            <StrategyList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
