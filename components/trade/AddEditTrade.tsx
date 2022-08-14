import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddEditTrade = (props: any) => {
  const [isStock, setIsStock] = useState(true)

  const actions = ['BUY', 'SELL']
  const types = ['STOCK', 'CALL OPTION', 'PUT OPTION']

  const { register, handleSubmit } = useForm()

  const isAddMode = true

  const handleTypeChange = (event: any) => {
    const selectedValue = event.target.value

    if (selectedValue.includes('STOCK')) setIsStock((v) => true)
    else setIsStock((v) => false)
  }

  const ActionTypeFormSection = ({
    actions,
    types,
  }: {
    actions: string[]
    types: string[]
  }) => {
    return (
      <div>
        <label htmlFor="action">Action</label>
        <select {...register('action')}>
          {actions.map((action) => (
            <option key={action} value={action}>
              {action}
            </option>
          ))}
        </select>
        <label htmlFor="type">Type</label>
        <select
          {...register('type', {
            onChange: (e) => {
              handleTypeChange(e)
            },
          })}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    )
  }

  const StockForm = () => {
    return (
      <div>
        <div>
          <div>
            <label htmlFor="">Open Date</label>
            <input {...register('openDate')} type="date"></input>
          </div>
          <div>
            <label htmlFor="quantity">Qty</label>
            <input {...register('quantity')} type="number"></input>
          </div>
          <div>
            <label htmlFor="">Price</label>
            <input {...register('strikePrice')} type="number"></input>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">Transaction</label>
            <input {...register('transaction')} type="number"></input>
          </div>
          <div>
            <label htmlFor="">Fee</label>
            <input {...register('openFee')} type="number"></input>
          </div>
        </div>
      </div>
    )
  }

  const OptionForm = () => {
    return (
      <div>
        <div>
          <label htmlFor="quantity">Qty</label>
          <input {...register('quantity')} type="number"></input>
        </div>

        <div>
          <label htmlFor="">Expiration Date</label>
          <input {...register('expirationDate')} type="date"></input>

          <label htmlFor="">Strike Price</label>
          <input {...register('strikePrice')} type="number"></input>
        </div>

        <div>
          <div>
            <label htmlFor="">Open Date</label>
            <input {...register('openDate')} type="date"></input>

            <label htmlFor="">Transaction</label>
            <input {...register('transaction')} type="number"></input>

            <label htmlFor="">Open Fee</label>
            <input {...register('openFee')} type="number"></input>
          </div>

          <div>
            <label htmlFor="">Close Date</label>
            <input {...register('closeDate')} type="date"></input>

            <label htmlFor="">Close Price</label>
            <input {...register('closePrice')} type="number"></input>

            <label htmlFor="">Close Fee</label>
            <input {...register('closeFee')} type="number"></input>
          </div>
        </div>
      </div>
    )
  }

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <ActionTypeFormSection {...{ actions, types }} />
      </div>
      <div>
        {isStock === true && <StockForm />}
        {isStock === false && <OptionForm />}
      </div>

      <div>
        <button>SUBMIT!</button>
      </div>
    </form>
  )
}

export default AddEditTrade
