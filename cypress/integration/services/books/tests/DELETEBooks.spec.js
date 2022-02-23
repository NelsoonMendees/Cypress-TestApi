///<reference types="Cypress" />

import * as DELETEBook from '../requests/DELETEBook.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            DELETEBook.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    })

    it('Criar e deletar um livro', () => {
        POSTBooks.addBook().then((resAddBook) => {
            DELETEBook.deleteBook(resAddBook.body.id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.equal(200)
            })
        })
    })
})