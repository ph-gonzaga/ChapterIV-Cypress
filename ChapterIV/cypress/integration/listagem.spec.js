/// <reference types="cypress" />

describe('Listagem', () => {
    it('Quando  nao houver cadastros, entao a listagem deve estar vazia', () => {
        window.localStorage.setItem('data', JSON.stringify([]))
     cy.visit('https://form-agilizei.netlify.app/listagem.html')
    });

    it('Quando houver um ou mais cadastros, entao a listagem deve exibir', () => {
        cy.fixture('listagem-itens').then(data => {
        window.localStorage.setItem('data', JSON.stringify(data))
       
        })
         cy.visit('https://form-agilizei.netlify.app/listagem.html')

         cy.get('table tbody tr').should('have.length', 1)
    });
});