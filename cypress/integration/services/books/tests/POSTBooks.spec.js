///<reference types="Cypress" />

import * as POSTBooks from '../requests/POSTBooks.request'

describe('POSTBooks', () => {
    it('Adicionar um novo livro', () => {
        POSTBooks.addBook().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('Senhor dos Aneis')
        })
    })
})