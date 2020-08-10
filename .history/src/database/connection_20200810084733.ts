import Knex from 'knex';

const db = Knex({
    client: 'mysql',
  connection: {
    // socketPath : '/path/to/socket.sock',
    user : 'root',
    password : '',
    database : 'myapp_test'
  }
})