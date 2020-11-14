import { getRepository, Repository } from 'typeorm';

import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';
import ICustomerRepository from '@modules/customers/repositories/ICustomerRepository'

import Customer from '../entities/Customer';

class CustomerRepository implements ICustomerRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async create(data: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.ormRepository.create(data);

    await this.ormRepository.save(customer);

    return customer;
  };

  public async delete(user_id: string): Promise<void> {
    const customer = await this.ormRepository.findOne({
      where: {
        id: user_id,
      }
    });

    if (customer) {
      await this.ormRepository.delete({ id: user_id });
    }
  }

  public async findAllCustomers(): Promise<Customer[]> {
    const customers = await this.ormRepository.find();

    return customers;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne(id)

    return customer;
  }

  public async findByCpf(cpf: number): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: {
        cpf,
      }
    })

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    const updatedCustomer = await this.ormRepository.save(customer);

    return updatedCustomer;
  }

}

export default CustomerRepository;
