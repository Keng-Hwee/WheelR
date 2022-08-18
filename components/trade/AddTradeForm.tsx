import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useGetStrategyForAddTradeQuery } from '../../graphql/generated/graphql-backend'
import ActionTypeFormSection from './ActionTypeFormSection'
import OptionFormSection from './OptionFormSection'
import StockFormSection from './StockFormSection'

const AddTradeForm = (props: any) => {
  const [isStock, setIsStock] = useState(true)
  const { register, handleSubmit } = useForm()

  const handleTypeChange = (event: any) => {
    const selectedValue = event.target.value

    if (selectedValue.includes('STOCK')) setIsStock((v) => true)
    else setIsStock((v) => false)
  }

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const { data, isLoading } = useGetStrategyForAddTradeQuery({
    strategyId: 1,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <ActionTypeFormSection {...{ register, handleTypeChange }} />
      </div>
      <div>
        {isStock === true && <StockFormSection {...{ register }} />}
        {isStock === false && <OptionFormSection {...{ register }} />}
      </div>

      <div>
        <button>SUBMIT!</button>
      </div>
    </form>
  )

  // if (isLoading) {
  //   return <div>LOADING!!!!!!</div>
  // }

  // if (data?.strategy?.__typename === 'ApiError') {
  //   return <div>{data?.strategy.message}</div>
  // } else if (data?.strategy?.__typename === 'Strategy') {
  //   return (
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <div>
  //         <ActionTypeFormSection
  //           {...{ register, handleTypeChange }}
  //         />
  //       </div>
  //       <div>
  //         {isStock === true && <StockFormSection {...{ register }} />}
  //         {isStock === false && (
  //           <OptionFormSection {...{ register }} />
  //         )}
  //       </div>

  //       <div>
  //         <button>SUBMIT!</button>
  //       </div>
  //     </form>
  //   )
  // }
}

export default AddTradeForm
