import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import SearchBar from '.'
import { SearchBarProps } from './SearchBar'

const mocks = {
  name: 'Test search',
  onSubmitSearch: vi.fn(),
}

const ui = (props: SearchBarProps) => render(<SearchBar {...props} />)

describe('<SearchBar />', () => {
  it('should render the search bar', async () => {
    await act(async () => {
      ui(mocks)
    })

    expect(screen.getByPlaceholderText('Search Test search...')).toBeDefined()
  })
})
