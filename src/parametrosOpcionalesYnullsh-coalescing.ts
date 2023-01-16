/*  */
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    /* nullish coalescing(??) para validar si viene y si no colocar el valor de la derecha,
    para tener valores por defecto */
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };
};

const rta = createProduct(23, true, 123413);
const rta2 = createProduct(23, false, 0);

console.log(rta);
console.log(rta2);
