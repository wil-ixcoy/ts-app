/* arreglo que acepta mutaciones */
const numbers: number[] = [1,2,3,4,5,6];
numbers.push(4);
numbers.pop();
numbers.unshift(12);


/* arreglo que acepta mutaciones */
const numbers2: Readonly<number[]> = [1,2,3,4,5,6];
/*
metodos que no se pueden usarse por que mutan al arreglo
numbers2.push(4);
numbers2.pop();
numbers2.unshift(12); */

/* metodos que si pueden usarse por que no mutan al arreglo */

numbers2.filter(()=>{})
numbers2.reduce(()=>0)
numbers2.map(()=> 0)


/* funcion para eliminar una letra de un texto */

/* function Eliminar(text:string, letra:string):string{
  let arreglo = text.split(letra).join("")
  return arreglo;
}

console.log(Eliminar("Wiliams","m")); */
