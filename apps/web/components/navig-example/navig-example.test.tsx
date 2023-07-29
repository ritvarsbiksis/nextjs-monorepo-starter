import { render, screen } from 'test-utils'
import { NavigExample } from './navig-example'

describe('NavigExample', () => {
  it('renders correctly', () => {
    render(<NavigExample />)

    const nav = screen.getByRole('navigation')

    expect(nav).toHaveClass('main')
    expect(screen.getByText('List')).toBeInTheDocument
  })
})
