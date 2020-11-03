import path from 'path';
// import 'dotenv/config'

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'src', 'database', 'dev.sqlite3')
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        useNullAsDefault: true,
    },

    production: {
        client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            port : process.env.DB_PORT,
            user : process.env.DB_USERNAME,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_DATABASE,
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        }
    }
}