import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database',)
    }
}