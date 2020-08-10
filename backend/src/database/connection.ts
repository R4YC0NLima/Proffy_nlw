import knex from 'knex';

const db = knex({
    client: 'mysql',
    connection: {
        user : 'root',
        password : '',
        database : 'nlw_proffy'
    }
})

export default db;