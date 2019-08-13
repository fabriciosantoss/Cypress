# Desafio Cubos

Olá Galera, espero que gostem do meu código, vou passar um rápido tutorial para que vocês possam executar os testes.

1 - Primeiramente faça o Download e a instalação do NodeJs

2 - Execute o cmd e use o comando npm installl cypress --save-dev para a instalação do cypress

3 - Após a instalação do cypress verifique se ele está funcionando  corretamente com o comando npx cypress open

4 - Ainda no cmd execute o comando npm install cypress-cucumber-preprocessor --save-dev para a instalação do cucumber

5 - Abra o aquivo index.js, dentro da plugins lá no cypress e adicione o seguinte bloco de comando: 


            const cucumber = require('cypress-cucumber-preprocessor').default

            module.exports = (on, config) => {
              on('file:preprocessor', cucumber())
            }

6 - Também no cmd use o comando npm install cosmiconfig, abra o aquivo package.json  e adicione o seguinte comando:

               , "cypress-cucumber-preprocessor": {
              "nonGlobalStepDefinitions": true
            }
            
7 - Por úlitmo mas não menos importante execute o comando npm install -D cypress-xpath, abra o arquivo index.js novamente e adicione o seguinte código:

                require('cypress-xpath')
                
                
                
             Por hoje é só pessoal, e espero ver vocês em breve :D
