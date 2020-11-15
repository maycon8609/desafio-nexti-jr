import { injectable, inject } from 'tsyringe';

import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderRepository from '@modules/orders/repositories/IOrderRepository';

@injectable()
class ListOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
  ) { }

  public async execute(): Promise<Order[]> {
    const orders = await this.orderRepository.findAllOrders();

    return orders;
  }
}

export default ListOrderService;
