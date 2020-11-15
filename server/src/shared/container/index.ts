import { container } from 'tsyringe';

import ICustomerRepository from '@modules/customers/repositories/ICustomerRepository';
import CustomerRepository from '@modules/customers/infra/typeorm/repositories/CustomerRepository';

import IProductRepository from '@modules/products/repositories/IProductRepository';
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductRepository';

import IOrderRepository from '@modules/orders/repositories/IOrderRepository';
import OrderRepository from '@modules/orders/infra/typeorm/repositories/OrderRepository';


container.registerSingleton<ICustomerRepository>(
  'CustomerRepository',
  CustomerRepository
);

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository
);

container.registerSingleton<IOrderRepository>(
  'OrderRepository',
  OrderRepository
);
