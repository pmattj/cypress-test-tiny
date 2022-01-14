/// <reference types="cypress" />
describe('https://github.com/cypress-io/cypress/issues/19697', () => {

  it('succeeds visiting the site without CSP', () => {
    cy.visit('https://fuschia-rebel-galliform.glitch.me/index.html');
  })

  it('fails visiting the site with CSP', () => {
    cy.visit('https://fuschia-rebel-galliform.glitch.me/index-with-csp-in-meta.html');
  })
})
