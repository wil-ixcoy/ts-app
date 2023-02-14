/* el problema que existe en esta función es que retorna dos valores, pero typescript no sabe cual de dos o mas retorna
por eso a la respuesta no puede usarse metodos como reverse o split en los array o metodo de string.  */
function parseStr(input:string |string[]): string | string[]{
  if(Array.isArray(input)){
    return input.join("");
  }else{
     return  input.split("");
  }
}

const rtaString = parseStr("Nico");
const rtaArray = parseStr(["N","i","c","o"])

console.log(rtaString)
console.log(rtaArray);

