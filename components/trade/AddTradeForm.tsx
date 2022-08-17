import { useGetStrategyForAddTradeQuery } from '../../graphql/generated/graphql-backend'

const AddTradeForm = (props: any) => {
  const { data, isLoading } = useGetStrategyForAddTradeQuery({
    strategyId: 1,
  })

  if (isLoading) {
    return <div>LOADING!!!!!!</div>
  }

  if (data?.strategy?.__typename === 'ApiError') {
    return <div>{data?.strategy.message}</div>
  } else if (data?.strategy?.__typename === 'Strategy') {
    var test = data?.strategy.id
  }
}

export default AddTradeForm
