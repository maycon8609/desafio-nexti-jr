import { injectable, inject } from 'tsyringe';

import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductRepository from '@modules/products/repositories/IProductRepository';

interface IRequest {
  sku: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) { }

  public async execute({ sku, name, description, price, quantity }: IRequest): Promise<Product> {
    const existiProduct = await this.productRepository.findBySku(sku);

    if (existiProduct) {
      throw new Error('product already registered');
    }

    const product = await this.productRepository.create({
      sku,
      name,
      description,
      price,
      quantity
    });

    return product;
  }
}

export default CreateProductService;
