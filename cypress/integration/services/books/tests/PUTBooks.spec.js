///<reference types="Cypress" />
import * as PUTBooks from '../requests/PUTBook.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('PUT Books', () => {
    it('Alterar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.alterBook(resAllBooks.body[0].id).should((resAlterBook) => {
                expect(resAlterBook.status).to.equal(200)
                expect(resAlterBook.body).to.be.not.null
                expect(resAlterBook.body.title).to.equal('Harry Potter')
            })
        })
    })

    it('Criar e alterar um livro', () => {
        POSTBooks.addBook().then((resAddBook) => {
            PUTBooks.alterBook(resAddBook.body.id).should((resAlterBook) => {
                expect(resAlterBook.status).to.equal(200)
                expect(resAlterBook.body).to.be.not.null
                expect(resAlterBook.body.title).to.eq('Harry Potter')
            })
        })
    })
})