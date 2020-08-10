import express from 'express';
import db 

const routes = express.Router();

routes.get('/', (request, response) => {
    console.log('Acessou a rota');
})

// Criar aula
routes.post('/classes', (request, response) => {
    const data = request.body;
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
    console.log('acessou a rota para enviar');
    console.log(data);
    

    return response.send();
    
})


export default routes;