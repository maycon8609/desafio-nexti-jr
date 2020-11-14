import { injectable, inject } from 'tsyringe';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import ICustomerRepository from '@modules/customers/repositories/ICustomerRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class DeleteCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository,
  ) { }

  public async execute({ user_id }: IRequest): Promise<void> {
    const customer = await this.customerRepository.findById(user_id);

    if (!customer) {
      throw new Error('Customer does not exist');
    }

    await this.customerRepository.delete(user_id);
  }
}

export default DeleteCustomerService;
