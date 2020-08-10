import express from 'express';

const app = express();

app.get('/', (request, response) => {
    console.log('Acessou a rota');
    
})

app.listen(3333);