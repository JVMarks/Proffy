import express from 'express';
import ClassesControllers from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsCrontoller =  new ConnectionsController;

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsCrontoller.index);
routes.post('/connections', connectionsCrontoller.create);
export default routes;