import Order from '../infra/typeorm/entities/Order';

import ICreateOrderDTO from '../dtos/ICreateOrderDTO';

export default interface IOrderRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findById(id: string): Promise<Order | undefined>;
  findAllOrders(): Promise<Order[]>;
  delete(id: string): Promise<void>;
}
