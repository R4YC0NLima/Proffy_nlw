import express from 'express';

const routes = express.Router();

app.get('/', (request, response) => {
    console.log('Acessou a rota');
    
})


export default routes;