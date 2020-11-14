import { injectable, inject } from 'tsyringe';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import ICustomerRepository from '@modules/customers/repositories/ICustomerRepository';

@injectable()
class ListCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository,
  ) { }

  public async execute(): Promise<Customer[]> {
    const customers = await this.customerRepository.findAllCustomers();

    return customers;
  }
}

export default ListCustomerService;
