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

Cypress.Commands.add('submitConcurrentRequests', (numRequests) => {
   const requests = Array.from({ length: numRequests }, (_, index) => {
     return cy.request({
       method: 'POST',
       url: `/api/submituserdata`, // Use the environment variable
       body: cy.fixture('ex_data.json'),
       failOnStatusCode: false, // Allow failed requests to be captured
     }).then((response) => {
      // You can add assertions here based on the response status if needed
      expect(response.status).to.eq(200); // Example assertion
    });
   });
 
   return Promise.all(requests);
 });
 
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