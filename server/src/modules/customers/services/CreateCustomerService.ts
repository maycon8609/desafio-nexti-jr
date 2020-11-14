import { injectable, inject } from 'tsyringe';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import ICustomerRepository from '@modules/customers/repositories/ICustomerRepository';

interface IRequest {
  name: string;
  cpf: number;
  date_birth: Date;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository,
  ) { }

  public async execute({ name, cpf, date_birth }: IRequest): Promise<Customer> {
    const existiCustomer = await this.customerRepository.findByCpf(cpf);

    if(existiCustomer) {
      throw new Error('User already registered with the CPF informed');
    }

    const customer = await this.customerRepository.create({
      name,
      cpf,
      date_birth
    });

    return customer;
   }
}

export default CreateCustomerService;
