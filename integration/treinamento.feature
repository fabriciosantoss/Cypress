Feature: Preenchimento dos campos do desafio

   		Background: campo de treinamento
		Given que eu esteja no campo de treinamento
        
		Scenario: Preenchimento dos dados pessoais
		When eu preencher os campos
        And meu nome for preenchido
		And a tabela estiver preenchida com o cadastro completo
		Then deve ser exibido a mensagem de cadastro