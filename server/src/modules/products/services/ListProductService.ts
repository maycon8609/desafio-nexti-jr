import { injectable, inject } from 'tsyringe';

import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductRepository from '@modules/products/repositories/IProductRepository';

@injectable()
class ListProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) { }

  public async execute(): Promise<Product[]> {
    const products = await this.productRepository.findAllProducts();

    return products;
  }
}

export default ListProductService;
