/* para no usar el coalesing en typescript, se puede asignar un valor por defecto al momento
de definir los parametros de la funcion, sin necesidad de colocar el signo de interrogacion ?
solo con colocar el tipo de dato y el valor por defecto con el signo de igual

  isNew: boolean = true,
  stock: number = 10

*/
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock,
  };
};

const rta = createProduct(23, true, 123413);
const rta2 = createProduct(23, false, 0);

console.log(rta);
console.log(rta2);
