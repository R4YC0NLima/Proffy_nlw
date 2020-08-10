import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    console.log('Acessou a rota');
})

// Criar aula
routes.post('/classes', async (request, response) => {
    const data = request
    // const {
    //     name,
    //     avatar,
    //     whatsapp,
    //     bio,
    //     subject,
    //     cost,
    //     schedule
    // } = request.body;

    // await db('users').insert({
    //     name,
    //     avatar,
    //     whatsapp,
    //     bio
    // })

    return response.send();
    
})


export default routes;