import { injectable, inject } from 'tsyringe';

import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductRepository from '@modules/products/repositories/IProductRepository';

interface IRequest {
  id: string;
  sku: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) { }

  public async execute({ id, sku, name, description, price, quantity }: IRequest): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new Error('Product does not exist');
    }

    product.id = id;
    product.sku = sku;
    product.name = name;
    product.description = description;
    product.price = price;
    product.quantity = quantity;

    await this.productRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
