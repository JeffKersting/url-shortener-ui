describe('App home page', () => {
  it('Should be able to visit the page using a stubbed GET', () => {
    cy.fixture('../fixtures/urls.json')
      .then((response) => {
        cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
          statusCode: 200,
          body: response
        })
    })
    cy.visit('http://localhost:3000')
      .get('.url')
      .should('contain', 'Cypress Test')
  })

  
})
