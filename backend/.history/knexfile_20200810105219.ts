import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
}