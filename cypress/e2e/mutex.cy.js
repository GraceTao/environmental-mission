describe('concurrent submissions', () => {
  it('writes data to Google sheet with mutex', () => {
    cy.intercept('POST', '/api/submituserdata').as('submitRequests');

    cy.submitConcurrentRequests(100);

    cy.wait('@submitRequests', { timeout: 10000 }).should('have.property', 'response');

  })
})