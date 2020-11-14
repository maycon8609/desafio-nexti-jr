import ICreateProductDTO from "../dtos/ICreateProductDTO";

import Product from "@modules/products/infra/typeorm/entities/Product";

export default interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  delete(product_id: string): Promise<void>;
  findAllProducts(): Promise<Product[]>;
  findById(id: string): Promise<Product | undefined>;
  findBySku(sku: number): Promise<Product | undefined>;
  save(product: Product): Promise<Product>;
}
