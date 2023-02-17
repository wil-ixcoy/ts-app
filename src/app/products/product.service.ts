import { Product } from './product.model';

export const product: Product[] = [];

export async function addProduct(data: Product) {
  product.push(data);
  return product[0];
}

export async function listProduct() {}
export async function getProduct(id: string) {}
export async function updateProduct(id: string, changes: Product) {}
export async function deleteProduct(id: string) {}
