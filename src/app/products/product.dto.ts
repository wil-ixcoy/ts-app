/* Utily Types:
DTOs para creación (Data Transfer Object | Objetos de Transferencia de Datos)

Omit: Se omiten valores que existen en una interfaz
Pick


*/

import { Product } from './product.model';

/* con Omit se omiten valores que se desean de una interfaz */

type createProductDTOType = Omit<
  Product,
  'id' | 'createdAt' | 'updatedAt' | 'category'
>;

export interface createProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

/* El contrario a Omit es Pick, en vez de omitir se elige cuales mostrar */

type example = Pick<Product, 'color' | 'description'>;
