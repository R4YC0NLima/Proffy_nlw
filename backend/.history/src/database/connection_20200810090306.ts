import knex from 'knex';

const db = knex({
    client: 'mysql',
    connection: {
        user : 'root',
        password : '',
        database : 'proffy'
    }
})