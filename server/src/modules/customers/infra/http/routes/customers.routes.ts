import { Router } from 'express';

import CustomersController from '../controllers/CustomersController';

const customersController = new CustomersController();

const customersRouter = Router();

customersRouter.post('/', customersController.create);


export default customersRouter;
