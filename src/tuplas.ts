/* arreglo normal se definen los valores que puede tener pero no que cantidad puede tener */
const arreglo: (number | string)[] = [];

/* son un array fuertemente tipado */
/* con una tupla se define el lugar exacto de cada valor  */
/* se definen dentro del array lo que debe tener, diciendo que son solo dos */
let user: [string, number, boolean];

user = ['wil', 23, true];

/* se puede desesustrucar una tupla asi */

/* en let se almacena solo dos valores de la tupla, el tercero lo ignora */
let [username, age] = user;

console.log(username);
console.log(age);
