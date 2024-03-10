import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Header from '.'
import { HeaderProps } from './Header'

const mocks = {
  onSubmitSearch: vi.fn(),
}

const mockHeaderData: HeaderProps = {
  userName: 'Some Body',
  joinedDate: '10/21/2002',
  onSubmitSearch: mocks.onSubmitSearch,
}

const ui = (props: HeaderProps) => render(<Header {...props} />)

describe('<Header />', () => {
  it('should render the header with user info', async () => {
    await act(async () => {
      await ui(mockHeaderData)
    })

    expect(screen.getByText('Some Body')).toBeDefined()
    expect(screen.findByText('2002')).toBeDefined()
  })
})
