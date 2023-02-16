/* Las interfaces son una mejor forma de difinir objetos.

la interfaz sive igual que el type

Con type pueden definir tipos primitivos o difrectos, ejemplo, puede obtener solo un tipo o ser solo
uno

type userId = string | number;

-----------------------------------
Con la interface, se require un cuerpo, se usa para un cojunto de valores

interface userId {
  id: string | number,
  idUser: string  | number
}

Una de las funcionalidades de interface y la que los diferencia es que se puede extender,
mientras que type no.
*/

type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: string;
};

interface Producto {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: string;
}

const products: Producto[] = [];

products.push({
  id: 1,
  title: 'Zapatos',
  createdAt: new Date(),
  stock: 23,
});

console.log(products);

