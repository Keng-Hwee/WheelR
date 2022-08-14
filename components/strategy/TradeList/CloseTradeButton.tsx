import { MinusCircleIcon } from '@heroicons/react/outline'

const CloseTradeButton = () => {
  return (
    <div className="bg-yellow-100 rounded-lg bg-opacity-70 m-1 hover:bg-yellow-200 hover:bg-opacity-70">
      <MinusCircleIcon className="h-5 w-5 text-yellow-500 m-2" />
    </div>
  )
}

export default CloseTradeButton
