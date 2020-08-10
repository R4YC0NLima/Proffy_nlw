import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
                user : 'root',
        password : '',
        database : 'proffy'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
}