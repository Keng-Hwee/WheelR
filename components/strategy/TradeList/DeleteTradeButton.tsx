import { TrashIcon } from '@heroicons/react/outline'

const DeleteTradeButton = () => {
  return (
    <div className="bg-red-100 rounded-lg bg-opacity-40 m-1 hover:bg-red-200 hover:bg-opacity-60">
      <TrashIcon className="h-5 w-5 text-red-500 m-2" />
    </div>
  )
}

export default DeleteTradeButton
