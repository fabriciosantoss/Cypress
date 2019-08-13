import {And, When, Then,} from 'cypress-cucumber-preprocessor/steps';


When('eu preencher os campos', () => {   

    //preenche os dados pessoais
    cy.get('input[id="elementosForm:nome"]')
        .click()
        .type('Fabricio')

    cy.get('input[id="elementosForm:sobrenome"]')
        .click()
        .type("Santos")

    cy.get('select[id="elementosForm:escolaridade"]')
    .select('superior')

    cy.get('select[id="elementosForm:esportes"]')
    .select('futebol')

    cy.get('textarea[id="elementosForm:sugestoes"]')
        .click()
        .type('Chama eu que é sucesso :D')
        
     cy.get('input[id="elementosForm:comidaFavorita:2"]')
        .click()

    cy.get('input[id="elementosForm:sexo:0"]')
        .click()

   
})

And('meu nome for preenchido', () => {
    //faz a verificação dos dados pessoais
    cy.get('input[id="elementosForm:nome"]')
        .should('have.value', 'Fabricio')

    cy.get('input[id="elementosForm:sobrenome"]')
        .should('have.value', 'Santos')

    cy.get('textarea[id="elementosForm:sugestoes"]')
        .should('have.value', 'Chama eu que é sucesso :D')

    cy.get('input[id="elementosForm:sexo:0"]')
        .should('be.checked')

    cy.get('input[id="elementosForm:comidaFavorita:2"]')
        .should('be.checked')

      })        

And('a tabela estiver preenchida com o cadastro completo', () => {   
   //preenche os "inputs" da tabela
    cy.xpath('//tr[1]//td[6]').find('input[type="text"]')
      .click()
      .type('Cubos')
    
    cy.xpath('//tr[2]//td[6]').find('input[type="text"]')
      .click()
      .type('I')
    
    cy.xpath('//tr[3]//td[6]').find('input[type="text"]')
      .click()
      .type('Love') 
    
    cy.xpath('//tr[4]//td[6]').find('input[type="text"]')
       .click()
      .type('You')
    
    cy.xpath('//tr[5]//td[6]').find('input[type="text"]')
       .click()
      .type('<3')

      cy.get('input[id="elementosForm:cadastrar"]').click()    

      cy.get('input[id="confirm"]').click() 
})

Then('deve ser exibido a mensagem de cadastro',()=>{
    //Faz a confirmação do cadastro e do pop-up
    cy.contains("Cadastrado!")
    cy.contains("Fabricio")
    cy.contains("Santos")

    const stub = cy.stub()
    cy.on('window:alert',stub)

    cy.xpath('//center//input[@id="confirm"]').click()
    .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Confirmado')
        
    })

})  