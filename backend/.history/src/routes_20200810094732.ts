import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    console.log('Acessou a rota');
})

// Criar aula
routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        
    } = request.body;

    await db('users').insert({

    })

    return response.send();
    
})


export default routes;