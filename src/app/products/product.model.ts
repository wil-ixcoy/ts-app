import { Category } from '../categories/category.model';
type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: number;
  title: string;
  stock: number;
  size?: Sizes;
  createdAt: Date;
  /* se usa la interfaz de category */
  category: Category;
}
