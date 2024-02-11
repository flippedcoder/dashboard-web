import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import UserInfo from '.'
import { orderResponseData } from '../../mocks/orders'
import { userResponseData } from '../../mocks/users'

const mocks = {
  useQuery: vi.fn(),
  useErrorBoundary: vi.fn(),
  showBoundary: vi.fn(),
}

vi.mock('@tanstack/react-query', () => ({
  useQuery: () => mocks.useQuery(),
}))

vi.mock('react-error-boundary', () => ({
  useErrorBoundary: () => mocks.useErrorBoundary(),
}))

const ui = () => render(<UserInfo />)

describe('<UserInfo />', () => {
  beforeEach(() => {
    mocks.useQuery.mockReturnValue({
      isLoading: false,
      data: orderResponseData,
    })
    mocks.useQuery.mockReturnValue({
      isLoading: false,
      data: userResponseData,
    })
    mocks.useErrorBoundary.mockReturnValue({ showBoundary: mocks.showBoundary })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render the user info screen', async () => {
    await act(async () => {
      await ui()
    })

    expect(screen.getByPlaceholderText('Search products...')).toBeDefined()
    expect(screen.getByText('Dog stuff')).toBeDefined()
    expect(screen.getByText('Customer since 2002')).toBeDefined()
  })

  it('should render the loading circle when user data is loading', async () => {
    mocks.useQuery.mockReturnValue({
      isLoading: true,
    })

    await act(async () => {
      await ui()
    })

    expect(screen.getByTestId('user-loading-circle')).toBeDefined()
  })
})
