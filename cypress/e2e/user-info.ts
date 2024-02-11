import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the user info screen', () => {
  cy.visit('http://localhost:5173/')
})

When('I click the Actions nav link', () => {
  cy.contains('Actions')
  cy.contains('Actions').click()
})

Then('I should be redirected to the user actions screen', () => {
  cy.url().should('include', '/actions')
})
