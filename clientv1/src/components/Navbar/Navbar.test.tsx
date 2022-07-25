import { screen } from '@testing-library/react'
import { render } from '../../test-utils'
import { Navbar } from './Navbar'

test('renders navbar', () => {
  render(<Navbar />)
  const navbarElement = screen.getByText('WheelR App')
  expect(navbarElement).toBeInTheDocument()
})
