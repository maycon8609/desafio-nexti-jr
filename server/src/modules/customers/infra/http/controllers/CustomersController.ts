import { Request, response, Response } from 'express';
import { container } from 'tsyringe';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import UpdateCustomerService from '@modules/customers/services/UpdateCustomerService';
import ListCustomerService from '@modules/customers/services/ListCustomerService';
import DeleteCustomerService from '@modules/customers/services/DeleteCustomerService';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, date_birth } = request.body;

    const createCustomer = container.resolve(CreateCustomerService);

    const customer = await createCustomer.execute({
      name,
      cpf,
      date_birth
    });

    return response.json(customer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const { name, cpf, date_birth } = request.body;

    const updateCustomer = container.resolve(UpdateCustomerService);

    const customer = await updateCustomer.execute({
      id: user_id,
      name,
      cpf,
      date_birth
    });

    return response.json(customer);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const indexCustomer = container.resolve(ListCustomerService);

    const customers = await indexCustomer.execute();

    return response.json(customers);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const deleteCustomer = container.resolve(DeleteCustomerService);

    await deleteCustomer.execute({
      user_id,
    });

    return response.status(204).send();
  }
}
