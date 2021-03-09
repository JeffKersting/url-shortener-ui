describe('Form submission', () => {
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

  it('Should allow users to post a new url in the form', () => {
    cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        long_url: "http://cypresstesturl/longurl/requesttoshorten",
        title: "Cypress Test Title"
      })
    })

    cy.fixture('../fixtures/post-urls.json')
      .then((response) => {
        cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
          statusCode: 200,
          body: response
        })
    })

    cy.get('input[name=title]')
      .type('Cypress Test Title')
      .get('input[name=url]')
      .type('http://cypresstesturl/longurl/requesttoshorten')
      .get('form button').click()
  })

  it('Should render the new shortened url on the page', () => {
    cy.get('div').eq(2)
      .should('contain', 'Cypress Test Title')
      .and('contain', 'http://cypresstesturl/longurl/requesttoshorten')
      .and('contain', 'http://localhost:3001/useshorturl/2')
  })

  it('Should clear the inputs after form submission', () => {
    cy.get('input[name=title]')
      .should('be.empty')
      .get('input[name=url]')
      .should('be.empty')
  })

})
