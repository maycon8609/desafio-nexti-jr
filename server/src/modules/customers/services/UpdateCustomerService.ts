import { injectable, inject } from 'tsyringe';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import ICustomerRepository from '@modules/customers/repositories/ICustomerRepository';

interface IRequest {
  id: string;
  name: string;
  cpf: number;
  date_birth: Date;
}

@injectable()
class UpdateCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository,
  ) { }

  public async execute({ id, name, cpf, date_birth }: IRequest): Promise<Customer> {
    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new Error('Customer does not exist');
    }

    customer.name = name;
    customer.cpf = cpf;
    customer.date_birth = date_birth;

    await this.customerRepository.save(customer);

    return customer;
  }
}

export default UpdateCustomerService;
