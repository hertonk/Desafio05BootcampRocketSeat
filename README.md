# Resolução do Desafio 05 - GoStack

<h3 align="center">
  Desafio 05: Primeiro projeto Node.js
</h3>

## Descrição

Resolução do Desafio 05 do Bootcamp da RocketSeat.

### Testando a resolução

Para utilizar a resolução do desafio, você deve baixar este repositório rodar o comando `yarn` para a instalação das dependências e para "rodar" o back-end deve utilizar o comando `yarn dev:server`.

Abaixo segue uma descrição das rotas:

- **`POST /transactions`**: Essa rota tem como objetivo cadastrar novas transações, é necessário enviar no corpo da requisição (body) os seguintes parâmetros: `title`, `value` e `type`. Em `type` deve-se especificar se é um depósito `income` ou um saque `outcome`.

- **`GET /transactions`**: Essa rota é responsável por exibir a lista de todas as transações cadastradas na aplicação e ao final exibe um balanço das entradas e saídas.

---

Feito por Herton F. Vilarim.
