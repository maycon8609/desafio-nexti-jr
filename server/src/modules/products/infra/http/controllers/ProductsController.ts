import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '@modules/products/services/CreateProductService';
import UpdateProductService from '@modules/products/services/UpdateProductService';
import ListProductService from '@modules/products/services/ListProductService';
import DeleteProductService from '@modules/products/services/DeleteProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { sku, name, description, price, quantity } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      sku,
      name,
      description,
      price,
      quantity
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;
    const { sku, name, description, price, quantity } = request.body;

    const updateProduct = container.resolve(UpdateProductService);

    const product = await updateProduct.execute({
      id: product_id,
      sku,
      name,
      description,
      price,
      quantity
    });

    return response.json(product);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const indexProduct = container.resolve(ListProductService);

    const products = await indexProduct.execute();

    return response.json(products);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const deleteProduct = container.resolve(DeleteProductService);

    await deleteProduct.execute({
      product_id,
    });

    return response.status(204).send();
  }
}
