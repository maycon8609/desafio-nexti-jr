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
    const customer = await this.ormRepository.create(data);

    await this.ormRepository.save(customer);

    return customer;
  };

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async list(): Promise<Customer[]> {
    const customers = await this.ormRepository.find();

    return customers;
  }

  public async findByCpf(cpf: number): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: {
        cpf,
      }
    })

    return customer;
  }

  public async update(customer: Customer): Promise<Customer> {
    const updatedCustomer = await this.ormRepository.save(customer);

    return updatedCustomer;
  }

}

export default CustomerRepository;
