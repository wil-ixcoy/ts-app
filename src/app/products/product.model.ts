import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';
type Sizes = 'S' | 'M' | 'L' | 'XL';


/* uso de herencia en la interface de Product, los elementos que tiene BaseModel, por herencia
los tendrá toda interface a la se extienda */
export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  /* se usa la interfaz de category */
  category: Category;
}
