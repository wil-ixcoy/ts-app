import { addProduct } from './products/product.service';

const create = addProduct({
  id: 1,
  title: 'Tenis Jordan',
  stock: 24,
  createdAt: new Date(),
  size: 'M',
  category: {
    id: 12,
    name: 'Zapatos deportivos',
    createdAt: new Date()
  },
});

console.log(create);
