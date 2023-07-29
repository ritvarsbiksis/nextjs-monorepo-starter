/// <reference types="cypress" />

describe('Home page', () => {
  const { host } = Cypress.env()

  beforeEach(() => {
    cy.visit(host)
    cy.wait(500)
  })

  afterEach(() => cy.clearLocalStorage())

  it('Navigation', () => {
    cy.get('nav')
      .should('exist')
      .within(() => {
        cy.get('a').eq(1).click()
      })

    cy.get('ul')
      .should('exist')
      .within(() => {
        cy.contains('Item 3').should('exist')
      })
  })
})
