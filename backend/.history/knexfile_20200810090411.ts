import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        user : 'root',
        password : '',
        database : 'nlw'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
}