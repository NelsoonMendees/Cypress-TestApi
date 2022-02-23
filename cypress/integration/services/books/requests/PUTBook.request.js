///<reference types="Cypress" />

const payloadChangeBook = require('../payloads/change-book.json')

function alterBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: `/v1/Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json'
        },
        failsOnStatusCode: false,
        body: payloadChangeBook
    })
}

export { alterBook }