import { Product } from './product.model';
import { faker } from '@faker-js/faker';
import { createProductDTO } from './product.dto';
export const products: Product[] = [];

export const addProduct = async (data: createProductDTO) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export async function listProduct() {}
export async function getProduct(id: string) {}
export async function updateProduct(id: string, changes: Product) {}
export async function deleteProduct(id: string) {}
