// Verbo/metodo = endpoints . motivo (request).extensão
///<reference types="Cypress" />

function allBooks() {
    //cy.request - cliente http
    return cy.request({
        method: 'GET',
        url: '/v1/Books',
        failOnStatusCode: false
    })
}

export { allBooks }