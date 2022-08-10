import {
  Card,
  CardBody,
  CardHeaderText,
} from '../../components/common/Card'
import PremiumCollectionChart from '../../components/strategy/PremiumCollectionChart'
import StrategyValueChart from '../../components/strategy/StrategyValueChart'
import TradeList from '../../components/strategy/TradeList/TradeList'

const Strategy = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 mx-6 mt-4 lg:w-[1440px]">
        <div className="lg:col-span-2">
          <Card>
            <CardHeaderText text="TOTAL VALUE"></CardHeaderText>
            <CardBody>
              <p className="text-5xl text-slate-700 font-extrabold text-right">
                $ 12,091.22
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeaderText text="TOTAL PREMIUMS"></CardHeaderText>
            <CardBody>
              <p className="text-5xl text-slate-700 font-extrabold text-right">
                $ 3,153.70
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeaderText text="PREMIUMS THIS MONTH"></CardHeaderText>
            <CardBody>
              <p className="text-5xl text-slate-700 font-extrabold text-right">
                $ 89.10
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <StrategyValueChart />
        </div>
        <div className="lg:col-span-3">
          <PremiumCollectionChart />
        </div>

        <div className="lg:col-span-6">
          <TradeList />
        </div>
      </div>
    </div>
  )
}

export default Strategy
