Feature: Preenchimento dos campos do desafio

   		Background: campo de treinamento
		Given que eu esteja no campo de treinamento
        
		Scenario: Preenchimento dos dados pessoais
		When eu preencher os campos
        Then os campos devem ser preenchidos com as informacoes
