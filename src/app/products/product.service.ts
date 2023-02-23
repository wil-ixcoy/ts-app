import { Product } from './product.model';
import { faker } from '@faker-js/faker';
import {
  createProductDTO,
  updateProductDTO,
  FindProductDTO,
} from './product.dto';
export const products: Product[] = [];

export const addProduct = (data: createProductDTO): Product => {
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


/* con Product["id"] se obtiene el typo que sea id, no importa que sea string, boolean
o cualquier otro tipo que cambien desde el base.model */
export function updateProduct(id: Product["id"], changes: updateProductDTO): Product {
  const index = products.findIndex((item) => item.id == id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
}

export function findProducts(dto: FindProductDTO): Product[] {
  return products;
}


export async function deleteProduct(id: string) {}
