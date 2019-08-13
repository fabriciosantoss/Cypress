import {Given, When, Then,} from 'cypress-cucumber-preprocessor/steps';



When('eu preencher os campos', () => {   
    cy.get('input[id="elementosForm:nome"]')
        .click()
        .type('Fabricio')

    cy.get('input[id="elementosForm:sobrenome"]')
        .click()
        .type("Santos")

    cy.get('input[id="elementosForm:sugestoes"]')
        .click()
        .type('Chama eu que é sucesso :D')


    cy.get('input[id="elementosForm:sexo:0"]')
        .click()

   
})

Then('os campos devem ser preenchidos com as informacoes', () => {

    cy.get('input[id="elementosForm:nome"]')
        .should('have.value', 'Fabricio')

    cy.get('input[id="elementosForm:sobrenome"]')
        .should('have.value', 'Santos')

    cy.get('textarea[id="elementosForm:sugestoes"]')
        .should('have.value', 'Chama eu que é sucesso :D')

    cy.get('input[id="elementosForm:sexo:0"]')
        .should('be.checked')
})
