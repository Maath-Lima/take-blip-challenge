# take-blip-challenge

# API em Node.js e Express.js - API simples de consulta dos reposítórios da take blip no GitHub

Nesta API tenho um método básico de GET para os 5 repositórios de linguagem C# mais antigos da Take retornando um JSON nos moldes da api da própria Take,
ordenados de forma crescente por data de criação que será capaz de gerar um carrossel na plataforma da Blip em um bot.

## Tecnologias Utilizadas

- Node.js

- Postman

## Dependências

- Express

- Nodemon

- Axios

## Guia 

1. É necessário clonar o repositório 
2. Entrar no diretório Api 
3. Instalar todas as dependências utilizando `npm install`
4. Recomendo instalar o nodemon, utilizando `npm install nodemon`
5. Após isso rodar a aplicação utilizando `npm start`

## Testes

Foi criada uma requisição no Postman para o teste da API utilizando a url hospedada no Heroku https://take-blip-challenge-api.herokuapp.com/repos.
