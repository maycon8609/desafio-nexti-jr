import ICreateCustomerDTO from "../dtos/ICreateCustomerDTO";
import Customer from "@modules/customers/infra/typeorm/entities/Customer";

export default interface ICustomerRepository {
  create(data: ICreateCustomerDTO): Promise<Customer>;
  delete(id: string): Promise<void>;
  list(): Promise<Customer[]>;
  findByCpf(cpf: number): Promise<Customer | undefined>;
  update(customer: Customer): Promise<Customer>;
}
