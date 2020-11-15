import { Router } from 'express';

import OrdersController from '../controllers/OrdersController';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.post('/', ordersController.create);
ordersRouter.get('/', ordersController.index);
ordersRouter.get('/:id', ordersController.show);
ordersRouter.delete('/:id', ordersController.delete);

export default ordersRouter;
