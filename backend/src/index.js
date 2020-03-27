const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
//torna possível receber formato json no body da requisição
app.use(express.json());
app.use(routes);





app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: BUscar uma informação
 * POST: Criar uma informação no back-end;
 * PUT:  Alterar uma informação no bakc-end;
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de prâmetros:
 * 
 * Query: "usar metodo get parâmetros enviados pela url (na rota)
 *  - são parâmetros nomeados geralmente servem para listar itens fazer paginação"
 * 
 * Route Params: "Parâmetros usados para identificar recursos - usa-se /users/:id"
 * Request Body: "Corpo da requisição, utilizado para criar ou alterar recursos"
 */

/**
 * BANCOS DE DADOS:
 * SQL:  MySql, SQlite, PostgresSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * FORMAS DE USAR BANCOS DE DADOS SQL:
 * Drive: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 *  usar o knex - npm i knex;
 *  usar sqlite3 - npm i sqlite3;
 *  executando o knex - npx knex init
 *  npm intala pacote
 *  npx executa o pacote
 *  PARA INSTALAR O BANCO DE DADOS PODEMOS USAR MIGRATIONS:
 *      ISSO VAI CRIAR UM HISTÓRICO DAS ALTERAÇÕES FEITAS NO BANCO DE DADOS POSSIBILITANDO RETROCEDER
 *      ALGUMAS AÇÕES CASO NECESSÁRIO
 *      PRIMEIRA MIGRATION: npx knex migrate:make create_ongs
 */