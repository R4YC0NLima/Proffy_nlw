import Knex from 'knex';

const db = knex({
    client: 'mysql',
    connection: {
        // socketPath : '/path/to/socket.sock',
        user : 'root',
        password : '',
        database : 'proffy'
    }
})