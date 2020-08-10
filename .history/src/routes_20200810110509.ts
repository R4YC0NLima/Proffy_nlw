import express from 'express';
import ClassesController from './controllers/ClassesController';


const routes = express.Router();
const classesControllers = new ClassesController()

routes.get('/', (request, response) => {
    console.log('Acessou a rota');
})

// Criar aula
routes.post('/classes', ClassesController)


export default routes;