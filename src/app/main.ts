import { addProduct } from './products/product.service';
import { faker } from '@faker-js/faker';

for (let i = 0; i < 50; i++) {
  const create = addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: ['hola', 'mundo', 'typescript'],
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: 'M',
    categoryId: faker.datatype.uuid()
  });
  console.log(create);
}
