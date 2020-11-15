import { getRepository, Repository } from 'typeorm';

import IOrderRepository from '@modules/orders/repositories/IOrderRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Order from '../entities/Order';

class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({ customer, products }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      customer,
      order_products: products,
    });

    await this.ormRepository.save(order);

    return order;
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne(id, {
      relations: ['order_products', 'customer'],
    });

    return order;
  }

  public async findAllOrders(): Promise<Order[]> {
    const orders = await this.ormRepository.find({
      relations: ['order_products', 'customer'],
    });

    return orders;
  }

  public async delete(id: string): Promise<void> {
    const order = this.ormRepository.findOne({
      where: {
        id,
      }
    });

    await this.ormRepository.delete(id);
  }
}

export default OrderRepository;
