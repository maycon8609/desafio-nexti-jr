import ICreateCustomerDTO from "../dtos/ICreateCustomerDTO";

import Customer from "@modules/customers/infra/typeorm/entities/Customer";

export default interface ICustomerRepository {
  create(data: ICreateCustomerDTO): Promise<Customer>;
  delete(user_id: string): Promise<void>;
  findAllCustomers(): Promise<Customer[]>;
  findById(id: string): Promise<Customer | undefined>;
  findByCpf(cpf: number): Promise<Customer | undefined>;
  save(customer: Customer): Promise<Customer>;
}
