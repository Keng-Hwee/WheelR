import AddEditTrade from '../../../components/trade/AddEditTrade'
import { useRouter } from 'next/router'
import { StrategyContextProvider } from '../../../store/StrategyContext'

const AddTrade = () => {
  const router = useRouter()

  return (
    <StrategyContextProvider>
      <AddEditTrade />
    </StrategyContextProvider>
  )
}

export default AddTrade
