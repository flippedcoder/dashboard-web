import { act, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import NavBar from '.'

const ui = () =>
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )

describe('<NavBar />', () => {
  it('should render the nav bar', async () => {
    await act(async () => {
      ui()
    })

    expect(screen.getByText('Orders')).toBeDefined()
    expect(screen.getByText('Actions')).toBeDefined()
  })
})
