# Um exemplo de implementação de testes com Jest

O projeto é uma API simples desenvolvida usando TDD e usando as tecnologias axios, jest, nodemon e express.
Esse projeto está sendo criado com base em meus estudos em testes com Jest, espero ajudar alguém com esses exemplos. Você pode fazer um fork e/ou contribuir com esse projeto, desde que respeite a licença MIT.

Abaixo está um exemplo de como o teste foi feito
```js
test('Essa response deve retornar 200', async () => {
   const response = await axios.get('/');
   expect(response.status).toBe(200);
});
```

# Como baixar o projeto
- Clone o projeto
- Rode `npm i` para instalar todas as dependências
- `npm run test` para rodar os testes

Todos os testes estão na pasta `tests/*`

*Se você usa VS Code, essa extensão pode lhe ser muito útil [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)*
