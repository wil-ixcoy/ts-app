/* refuerza a any, para evitar que se use este, lo mejor es usar unknow */


let anyVary: any;

let unknowVar: unknown;

unknowVar = true;
unknowVar = 123;
unknowVar = 'Hola';


/* la ventaja es que te obliga a verificar la variable antes de ejecutar un metodo de cadena o de numero
o una funcion especial para el tipo*/

if(typeof unknowVar == "string"){
    unknowVar.toUpperCase();
    console.log(unknowVar)
}
