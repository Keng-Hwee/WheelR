import { UseFormRegister, FieldValues } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
}

const StockFormSection = ({ register }: Props) => {
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

export default StockFormSection
