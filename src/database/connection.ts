import knex from 'knex';
import path from 'path';
// import 'dotenv/config'

const db = knex({
    client: process.env.NODE_ENV === 'production' ? 'mysql': 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'dev.sqlite3'),
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
    },
    useNullAsDefault: true
})

export default db;