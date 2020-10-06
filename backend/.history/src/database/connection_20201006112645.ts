import knex from 'knex';

const db = knex({
    client: 'mysql',
    connection: {
        user : 'root',
        host: ''
        password : 'someRandomPassword',
        database : 'nlw_proffy'
    }
})

export default db;