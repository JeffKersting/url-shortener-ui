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

  it('Should have a header that contains a url form', () => {
    cy.get('header')
      .should('contain', 'URL Shortener')
      .get('form').should('exist')
  })

  it('Should have a form that contains inputs and a submit button', () => {
    cy.get('form').should('exist')
      .get('input[name=title]').should('exist')
      .get('input[name=url]').should('exist')
      .get('button').should('exist')
      .and('contain', 'Shorten Please!')
  })

  it('Should have a shortened url', () => {
    cy.get('div').should('exist')
      .get('div h3').should('contain', 'Cypress Test')
      .get('div a').should('exist')
      .get('div p').should('exist')
  })

  it('Should have a link in the url container', () => {
    cy.get('div a').should('have.attr', 'href')
  })
})
