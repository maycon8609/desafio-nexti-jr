import ICreateProductDTO from "../dtos/ICreateProductDTO";

import Product from "@modules/products/infra/typeorm/entities/Product";

interface IFindProducts {
  id: string;
}

export default interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  delete(product_id: string): Promise<void>;
  findAllProducts(): Promise<Product[]>;
  findAllById(products: IFindProducts[]): Promise<Product[]>;
  findById(id: string): Promise<Product | undefined>;
  findBySku(sku: number): Promise<Product | undefined>;
  save(product: Product): Promise<Product>;
}
