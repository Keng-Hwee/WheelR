import { UseFormRegister, FieldValues } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
  handleTypeChange: Function
}

const ActionTypeFormSection = ({
  register,
  handleTypeChange,
}: Props) => {
  const actions = ['BUY', 'SELL']
  const types = ['STOCK', 'CALL OPTION', 'PUT OPTION']

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

export default ActionTypeFormSection
