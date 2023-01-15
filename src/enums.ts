/* se nombra conmunmente con mayusculas */

/* la ventaja de usar enum es que se sabe las posibles opciones que tiene */

/* los enums sirven para tipas de que tipo de dato puede enviar un usuario a nuestra funcion,
evitando que envie otro valor */
enum ROLES {
  ADMIN = 'administrador',
  VENDEDOR = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  name: string;
  role: ROLES;
};

/* uso de enum */
const wil: User = {
  name: 'Wiliams Alexander',
  role: ROLES.ADMIN,
};

console.log(wil);
