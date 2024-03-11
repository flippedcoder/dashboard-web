import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ErrorFallback } from '.'
import { ErrorFallbackProps } from '../../types/errorTypes'

const mocks = {
  resetErrorBoundary: vi.fn(),
}

const mockError = {
  message: 'A 404 returned',
  name: 'Test error',
}

const ui = (props: ErrorFallbackProps) => render(<ErrorFallback {...props} />)

describe('<ErrorFallback />', () => {
  it('should render the error fallback with the passed error message', async () => {
    await act(async () => {
      ui({ error: mockError, resetErrorBoundary: mocks.resetErrorBoundary })
    })

    expect(screen.getByText(mockError.message))
  })
})
