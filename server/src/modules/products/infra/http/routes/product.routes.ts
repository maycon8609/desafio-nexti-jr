import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.post('/', productsController.create);
productsRouter.put('/:product_id', productsController.update);
productsRouter.get('/', productsController.index);
productsRouter.delete('/:product_id', productsController.delete);


export default productsRouter;
