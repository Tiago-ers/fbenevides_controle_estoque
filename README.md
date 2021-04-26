Desenvolver uma aplicação de cadastro de produtos, com controle de estoque, a aplicação deverá ter
as seguintes funcionalidades:

- CRUD de Produtos.
- Alerta visual de estoque mínimo.

Os atributos da entidade produto são:

- Id
- Nome
- Descrição
- Preço
- Quantidade
- Situação (Apenas na listagem do frontend)

Regra do alerta de estoque minímo:

- Deverá usar um badge na listagem de produtos;
- Quantidade entre 0 e 20 terá a situação "Crítico" e a cor do badge será vermelho
- Quantidade entre 21 e 50 terá a situação "Alerta" e a cor do badge será amarelo
- Quantidade maior que 51 terá a situação "OK" e a cor do badge será verde

A aplicação é simples e não precisa ser desenvolvida em cima de um container Docker,
e poderá ser usado qualquer Design Pattern, sem qualquer Linter, porém, terá as seguintes regras de desenvolvimento:

- Backend em Node.js
- Frontend em React.js (Com MatrialUI)
- Banco de dados poderá ser MySQL ou PostgreSQL
