import { getRepository, Repository, Not } from 'typeorm';

import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IProductRepository from '@modules/products/repositories/IProductRepository';

import Product from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create(data: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(data);

    await this.ormRepository.save(product);

    return product;
  };

  public async delete(product_id: string): Promise<void> {
    const product = await this.ormRepository.findOne({
      where: {
        id: product_id,
      }
    });

    if (product) {
      await this.ormRepository.delete({ id: product_id });
    }
  }

  public async findAllProducts(): Promise<Product[]> {
    const product = await this.ormRepository.find();

    return product;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id)

    return product;
  }

  public async findBySku(sku: number): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: {
        sku,
      }
    })

    return product;
  }

  public async save(product: Product): Promise<Product> {
    const updatedProduct = await this.ormRepository.save(product);

    return updatedProduct;
  }

}

export default ProductRepository;
