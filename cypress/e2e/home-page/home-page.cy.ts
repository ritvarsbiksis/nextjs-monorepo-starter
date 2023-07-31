/// <reference types="cypress" />

describe('Home page', () => {
  const { host } = Cypress.env()

  beforeEach(() => {
    cy.visit(host)
    cy.clearLocalStorage()
    cy.wait(500)
  })

  afterEach(() => cy.clearLocalStorage())

  it('Navigation', () => {
    cy.get('nav')
      .should('exist')
      .within(() => {
        cy.get('a').eq(1).click()
      })

    cy.contains('List of posts').should('exist')

    cy.get('ul')
      .should('exist')
      .within(() => {
        cy.get('li').should('have.length', 12)
      })
  })
})
