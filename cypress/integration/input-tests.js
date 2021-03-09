describe('Form inputs', () => {
  it('Should be able to visit the page using a stubbed GET', () => {
    cy.fixture('../fixtures/urls.json')
      .then((response) => {
        cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
          statusCode: 200,
          body: response
        })
    })
    cy.visit('http://localhost:3000')
  })

  it('Should allow users to enter a title, and update state to reflect that', () => {
    cy.get('input[name=title]')
      .type('Cypress Test Title')
  })

  it('Should allow users to enter a url, and update state to reflect that', () => {
    cy.get('input[name=url]')
      .type('http://cypresstesturl')
  })
})
