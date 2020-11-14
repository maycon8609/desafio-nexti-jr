import { injectable, inject } from 'tsyringe';

import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductRepository from '@modules/products/repositories/IProductRepository';

interface IRequest {
  product_id: string;
}

@injectable()
class DeleteProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) { }

  public async execute({ product_id }: IRequest): Promise<void> {
    const product = await this.productRepository.findById(product_id);

    if (!product) {
      throw new Error('Product does not exist');
    }

    await this.productRepository.delete(product_id);
  }
}

export default DeleteProductService;
