import knex from 'knex';

const db = knex({
    client: 'mysql',
    connection: {
        user: 'root',
        host: 'mysql_proffy',
        password: 'someRandomPassword',
        database: 'nlw_proffy'
    }
})

export default db;