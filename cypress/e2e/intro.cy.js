///<reference types='Cypress'/>

import week2Page from "../Pages/week2Page"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.wait(6000)
    cy.contains('Get Started')
  })
  it.only('assertions', () => {
    week2Page.launchURL()
    cy.get('[href="#howitwork"]').click()
    cy.url().should('include', 'howitwork')
    cy.contains('Get Trained')
    cy.get('.justify-content-end > :nth-child(3)').click()
    cy.url().should('eq', 'https://academy.doyenify.com/career')
    cy.get(':nth-child(1) > h3').should('be.visible').and('contain', 'Page not Available Yet')

  });
})