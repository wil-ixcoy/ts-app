/* la sobrecarga es esto, es tipar la funcion que ya existe,
con todos los tipos que recibe y  devuelve, pero uno por uno
es decir, si se necesita que obtenga y devuelva dos o mas
cosas se debe asignar la cantidad de sobrecargas necesarias.

Se tiene que usar el mismo nombre de la función para hacer la sobrecarga.

Si existe una sobrecarga con uknown o any se queda hasta abajo.

por ejemplo en la primera sobrecarga se recibe string y se devuelve array

la segunda, obtiene un array y devuelve string

y la tercera, obtiene un numero y devuelve boolean
*/
export function parseStr(input:string): string[];
export function parseStr(input:string[]): string;
export function parseStr(input:number):boolean;


export function parseStr(input:unknown):unknown{
  if(Array.isArray(input)){
    return input.join("");
  }else if(typeof input === "string"){
    return input.split("");
  }else if(typeof input === "number"){
    return true;
  }
}

const rtaArray = parseStr("Nico");
const rtaString = parseStr(["N","i","c","o"]);
const rtaBool = parseStr(23);

console.log(rtaArray);
console.log(rtaString);
console.log(rtaBool);

