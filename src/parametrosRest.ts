import { ROLES, User } from './enums';

const currentUser: User = {
  name: 'wil_ixcoy',
  role: ROLES.CUSTOMER,
};

/* en esta funcion deberiamos obtener parametro por parametro, no hay una forma de obtener N cantidad
de parametros */
export const checkAdminRole = () => {
  if (currentUser.role == ROLES.ADMIN) {
    return true;
  } else {
    return false;
  }
};

/* rest params:

...roles: string[]*/

/* aca, al usar rest params ·...roles: string[]· estamos diciendo que sin importar la cantidad
de parametros que obtenga los va a guardar en una matriz de tipo string, luego se valida leyendo
si se incluye o no, y si existen los roles y existe ese rol en el usuario retorna true */
export const checkRoles = (...roles: string[]) => {
  if(roles.includes(currentUser.role)){
    return true;
  }else{
    return false;
  }
};

const rta = checkRoles(ROLES.ADMIN,ROLES.CUSTOMER);

console.log(rta)
