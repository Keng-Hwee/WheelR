import * as React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { App } from './App'

const AllProviders = ({
  children,
}: {
  children?: React.ReactNode
}) => <App></App>

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
) => render(ui, { wrapper: AllProviders, ...options })

export { customRender as render }
