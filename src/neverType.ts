/* este tipo se usa para funciones que sabes que nunca van a terminar */

import { type } from 'os';

/* esta funcion nunca termina */
const withoutEnd = () => {
  while (true) {
    console.log('Nunca pares de practicar');
  }
};

const fail = (msg: string) => {
  throw new Error(msg);
};

const ejemplo = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  } else if (typeof input === 'number') {
    return 'Es un numero';
  } else if (Array.isArray(input)) {
  }
  return fail('no hay nada');
};

const rta = ejemplo('gola');
console.log(rta);
