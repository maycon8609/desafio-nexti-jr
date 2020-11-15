import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';
import ListOrderService from '@modules/orders/services/ListOrderService';
import DeleteOrderService from '@modules/orders/services/DeleteOrderService';

export default class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      customer_id,
      products
    });

    return response.json(order);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrder = container.resolve(FindOrderService);

    const order = await findOrder.execute({
      id,
    });

    return response.json(order);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listOrder = container.resolve(ListOrderService);

    const order = await listOrder.execute();

    return response.json(order);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteOrder = container.resolve(DeleteOrderService);

    await deleteOrder.execute(id);

    return response.status(204).send();
  }
}
