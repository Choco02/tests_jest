const axios = require('axios').default;
const status = require('../status');

const express = require('express');
const app = express();

const routes = require('../routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

const items = [ 'cookie' ];
const host = 'http://localhost:3000';

let server = app.listen(3000, () => {
    console.log('Online');
});

afterAll(() => {
    server.close();
    // Depois de todos os testes terminarem, fechar o server do express
    // https://jestjs.io/docs/setup-teardown#one-time-setup
})


test('Parâmetro nick não enviado', async () => {
    try {
        await axios.get(`${host}/`);
        // Requests com status 4xx no axios invocam uma Exception/Error (throw new Error)
        // o uso de await força a Promise reject cair no catch
    }
    catch(err) {
        expect(err.response.status).toBe(status.BAD_REQUEST);
    }
    
});

test('O nick foi encontrado na aplicação', async () => {
    const response = await axios.get(`${host}/`, {
        params: {
            nick: 'cookie'
        }
    });

    expect(response.status).toBe(status.OK);
});

test('O nick NÃO foi encontrado na aplicação', async () => {
    try {
        await axios.get(`${host}/`, {
            params: {
                nick: 'alice'
            }
        });
    }
    catch(err) {
        expect(err.response.status).toBe(status.NOT_FOUND);
    }
});
