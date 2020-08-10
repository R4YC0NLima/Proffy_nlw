import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        filename: path.resolve(__dirname, '')
    }
    // connection: {
    //     user : 'root',
    //     password : '',
    //     database : 'nlw_proffy'
    // },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
}