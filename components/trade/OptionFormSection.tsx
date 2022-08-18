import { UseFormRegister, FieldValues } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
}

const OptionFormSection = ({ register }: Props) => {
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

export default OptionFormSection
