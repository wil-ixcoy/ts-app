import { Product } from './product.model';

export const product: Product[] = [];

export async function addProduct(data: Product) {
  product.push(data);
  return product[0];
}
