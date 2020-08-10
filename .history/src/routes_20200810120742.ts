import express from 'express';
import ClassesController from './controllers/ClassesController';


const routes = express.Router();
const classesControllers = new ClassesController();
const conneControllers = new ConnectionsController();

routes.get('/', (request, response) => {
    console.log('Acessou a rota');
})

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)



export default routes;