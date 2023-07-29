import { render, screen } from 'test-utils'
import { Button } from './button-example'

describe('Button example', () => {
  it('renders correctly', () => {
    render(<Button />)

    const btn = screen.getByRole('button')

    expect(btn).toBeInTheDocument
    expect(btn).toHaveClass('root')
    expect(screen.getByText('test')).toBeInTheDocument
  })
})
