///<reference types="Cypress" />

const payloadAddBook = require('../payloads/add-book.json')

function addBook() {
    return cy.request({
        method: 'POST',
        url: '/v1/Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export { addBook }