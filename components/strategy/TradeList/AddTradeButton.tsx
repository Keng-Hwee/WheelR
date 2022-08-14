interface Props {
  strategyId: number
}

const AddTradeButton = () => {
  return (
    <div className="flex justify-end">
      <button className="bg-emerald-100 rounded-lg md:mt-3 mb-3 h-9 hover:bg-emerald-200 hover:cursor-pointer">
        <span className="text-emerald-800 font-bold p-5">
          Add Trade
        </span>
      </button>
    </div>
  )
}

export default AddTradeButton
