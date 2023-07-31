import { render, screen } from 'test-utils'
import { NavigExample } from './navig-example'

vi.mock('../../styles/fonts', () => ({
  vt323: {
    className: 'test-classname',
  },
}))

describe('NavigExample', () => {
  it('renders correctly', () => {
    render(<NavigExample />)

    const nav = screen.getByRole('navigation')

    expect(nav).toHaveClass('main')
    expect(screen.getByText('List')).toBeInTheDocument
  })
})
