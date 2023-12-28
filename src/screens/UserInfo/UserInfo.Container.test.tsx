import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import UserInfo from '.'

const mockUserInfo = () => {
  act(() => {
    render(<UserInfo />)
  })
}

describe('<UserInfo />', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render the user info screen', async () => {
    mockUserInfo()

    expect(screen.getByText('Search bar')).toBeDefined()
  })
})
