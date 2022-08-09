import { ReactElement, Children } from 'react'

interface ReactChildren {
  children: ReactElement[] | ReactElement
}

interface ReactChild {
  children: ReactElement
}

export const Card = ({ children }: ReactChildren) => {
  let _header, _headerText, _body

  Children.forEach(children, (child) => {
    if (child.type === CardHeader) _header = child
    if (child.type === CardHeaderText) _headerText = child
    if (child.type === CardBody) _body = child
  })

  return (
    <div className={'drop-shadow-md rounded-lg bg-slate-50 p-1'}>
      {_header}
      {_headerText}
      {_body && <div className="p-4">{_body}</div>}
    </div>
  )
}

export const CardHeader = ({ children }: ReactChild) => {
  return <>{children}</>
}

export const CardHeaderText = ({ text }: { text: string }) => {
  return (
    <>
      {
        <p className="p-3 text-lg font-bold text-slate-400 opacity-70">
          {text}
        </p>
      }
    </>
  )
}

export const CardBody = ({ children }: ReactChild) => {
  return <>{children}</>
}
