import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    console.log('Acessou a rota');
})

// Criar aula
routes.post('/classes', (request, response) => {
    const data = 
})


export default routes;