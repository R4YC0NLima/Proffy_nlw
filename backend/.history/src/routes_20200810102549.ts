import express from 'express';
import db from './database/connection';

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
        subject,
        cost,
        schedule
    } = request.body;

    const user_id

    const insertedUsersIds = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio
    })

    await db('classes').insert({
        subject,
        cost,
    })

    return response.send();
    
})


export default routes;