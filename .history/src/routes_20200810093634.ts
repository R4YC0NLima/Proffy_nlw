import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    console.log('Acessou a rota');
})

// Criar aula
routes.post('/classes', (request, response) => {
    const data = request.body;

    console.log(data);

    return response.send();
    
})


export default routes;