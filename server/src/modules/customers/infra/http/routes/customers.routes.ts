import { Router } from 'express';

import CustomersController from '../controllers/CustomersController';

const customersController = new CustomersController();

const customersRouter = Router();

customersRouter.post('/', customersController.create);
customersRouter.put('/:user_id', customersController.update);
customersRouter.get('/', customersController.index);
customersRouter.delete('/:user_id', customersController.delete);


export default customersRouter;
