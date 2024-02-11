describe('User Info', () => {
  it('Navigates to the TestStore home page', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Actions')

    cy.contains('Actions').click()
    cy.url().should('include', '/actions')
  })
})
