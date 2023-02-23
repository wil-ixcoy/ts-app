/* Utily Types:
DTOs para creación (Data Transfer Object | Objetos de Transferencia de Datos)

Omit: Se omiten valores que existen en una interfaz
Pick: Agrega los valores que se van a mostrar
Partial: pone opcionales a todos los valores
Required: se requiren todos los valores
Readonly: Solo de lectura

*/

import { Product } from "./product.model";

/* con Omit se omiten valores que se desean de una interfaz */

type createProductDTOType = Omit<Product, 'id' | 'createdAt' | "updatedAt" | "category">;

export interface createProductDTO extends Omit<Product, 'id' | 'createdAt' | "updatedAt" | "category"> {
  categoryId:string;
}

/* El contrario a Omit es Pick, en vez de omitir se elige cuales mostrar */

type example = Pick<Product, "color" | "description">


/* partial */
/* se usa createProduct que se omite para que no pueda ser editado, puede usarse Product */
export interface updateProductDTO extends Partial<createProductDTO>{

}


/* El contrario a Partial es Required, requiere todos los campos  */

type example2 = Required<Product>

/* solo de lectura */
type example3 = Readonly<Product>

/* uso de dos DTOs, Partial para que sea opcional y Readonly para que sea solo de lectura */
export interface FindProductDTO2 extends Readonly<Partial<Product>>{}


export interface FindProductDTO extends Readonly<Partial<Omit<Product,"tags">>>{
  /* no permite mutacion ni reasignacion*/
  readonly tags: ReadonlyArray<string>
}

