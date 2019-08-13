import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('que eu esteja no campo de treinamento', () => {


    const url = './campoTreinamento.html'
    cy.visit(url)

})