import { ReactElement } from 'react'

interface Props {
  header: string
  children: ReactElement
}

const Card = ({ header, children }: Props) => {
  console.log(children)
  return (
    <div className={'drop-shadow-md rounded-lg bg-slate-50 p-1'}>
      <p className="p-4 text-xl font-extrabold text-slate-400">
        {header}
      </p>
      <div className="p-6">{children}</div>
    </div>
  )
}

export default Card
