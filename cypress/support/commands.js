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

Cypress.Commands.add("submitConcurrentRequests", (numRequests) => {
   const requests = Array.from({ length: numRequests }, (_, index) => {
      return cy
         .request({
            method: "POST",
            url: `/api/submituserdata`, // Use the environment variable
            body: {
               state: "stateName",
               county: "countyName",
               school: "schoolName",
               order: "Before",
               emailAttempts: 1,
               inspectionAttempts: 2,
               mapAttempts: 3,
               wqiAttempts: 50,
               passwordAttempts: 3000,
               q1: "q1 answer",
               q2: "q2 answer",
               q3: "q3 answer",
               q4: "q4 answer",
               q5: "q5 answer",
            },
            failOnStatusCode: false, // Allow failed requests to be captured
         })
         .then((response) => {
            // You can add assertions here based on the response status if needed
            expect(response.status).to.eq(200); // Example assertion
         });
   });

   // return Promise.all(requests);
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
