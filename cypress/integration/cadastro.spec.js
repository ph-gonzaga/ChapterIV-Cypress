/// <reference types="cypress" />

// Mocha -> Test Runner

// describe, context, it

let Chance = require('chance')
let chance = new Chance()

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, entao o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app')

        cy.get(`input[name=firstName]`).type(chance.first())
        cy.get(`input[name=lastName]`).type(chance.last())
        cy.get(`textarea[name=adress]`).type(`Sem endereco`)
        cy.get(`input[name=emailAdress]`).type(`test@gmail.com`)

        cy.get(`input[value="n"]`).check()
        cy.get(`input[type="checkbox"]`).check('Netflix')
        cy.get(`input[type="checkbox"]`).check('Dormir')

        cy.get(`select#countries`).select('Dinamarca', { force: true})

        cy.contains(`Finalizar cadastro`).click()

        cy.url().should('contain', 'listagem')
    });
});

