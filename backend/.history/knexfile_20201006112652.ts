import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        user : 'root',
        host: 'mysql_proffy',
        password : 'someRandomPassword',
        database : 'nlw_proffy'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
}