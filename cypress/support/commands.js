// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToPage',  (email, password) => {
    cy.get('[id = "user_email"]').type(email)
    cy.get( '[id = "user_password"]' ). type(`${password.toString()}`)
    cy.contains("Zaloguj się").click()
  })

  Cypress.Commands.add('addHomeWorkAgain',  () => {
   cy.contains("Przejdź do kursu").scrollIntoView().click()
   cy.get('[class = "css-8mmkcg"]').click()
   cy.contains("Zadanie domowe").click()
   cy.get('[aria-label="rdw-editor"]').contains("https://mellifluous-gaufre-530e36.netlify.app/").click()
   cy.contains("Ponownie prześlij pracę domową").click()
  })