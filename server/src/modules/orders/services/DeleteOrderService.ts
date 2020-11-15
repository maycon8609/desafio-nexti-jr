import { injectable, inject } from 'tsyringe';

import IOrderRepository from '@modules/orders/repositories/IOrderRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class DeleteOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
  ){}

  public async execute(id: string): Promise<void> {
    const orderExiste = this.orderRepository.findById(id);

    if(!orderExiste) {
      throw new AppError('Order does not exist');
    }

    await this.orderRepository.delete(id);
  }
}

export default DeleteOrderService;
