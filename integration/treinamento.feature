Feature: Preenchimento dos campos do desafio

    Scenario: Preenchimento dos dados pessoais
        Given que eu esteja no campo de treinamento
        When eu preencher os campos
        Then os campos devem ser preenchidos com as informacoes
