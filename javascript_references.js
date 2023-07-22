//Operadores

//Suma
let suma = 10 + 20
    console.log(suma); //30

//Resta
let resta = 30 - 10;
    console.log(resta); //6

//Multiplicacion
let multp = 2 * 3
    console.log(multp) //6

//Division
let div = 20 / 20
    console.log(div) // 1

//Mod
let mod = 20 % 5
    console.log(mod) // 0

//Raiz
let raizCuadrada = Math.sqrt(16) 
    console.log(raizCuadrada) // 4



// Operadores de potencia

let cuadrado = 2 ** 2
    console.log(cuadrado) // 4

let cubo = 2 ** 3 
    console.log(cubo) // 8

let cubo3 = Math.pow(2,3)    
    console.log(cubo3)



// Loops

objeto = {"red":1,"blue":2,"green":3}
array = [a,b,c]

// for 
for (i=0,n=10; i<=n ;i++) console.log(array[i]) // a b c

// for of
for (elem of array) console.log(elem) // a b c
for (elem of [1,2,3]) console.log(elem) // a b c

// for in
for(key in objeto) console.log(key) // red blue green
for(indice in array) console.log(indice) // 0 1 2

// forEach() -> any
array.forEach(elem => console.log(elem)); // a b c
array.forEach( (elem,indice,array) => console.log(elem,indice,array)); // 0;a;[a,b,c] 1;b;[a,b,c] 2;c;[a,b,c]

// map() -> newArray
array.map(elem => console.log(elem) ) // a b c
let nuevoArray = array.map(elem => elem.toUpperCase() ) // A B C
    console.log(nuevoArray) // ['A','B','C']
    console.log(array.map(elem => elem.toUpperCase() ))// ['A','B','C']



// arrow functions    

/*   () => expression */
let sum = () => 2+2
    console.log(sum())

/*   param => expression */
let raiz = a => Math.sqrt(a)
    console.log(cuadr(16)) // 4

//   (param) => expression
let siguiente = (a) => a + 1
    console.log(siguiente(2)) // 3  

//  (param1, paramN) => expression 
let multpl = (a,b) => a * b
    console.log(multp(2,3)) // 6

/*  
  
() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}

*/


// Operacdor Ternario

// condition ? exprIfTrue : exprIfFalse

function obtenerTarifa (esMiembro) {
    return (esMiembro ? '$2.00' : '$10.00')
}
console.log(obtenerTarifa(true))      //$2.00
console.log(obtenerTarifa(false))     //$10.00
console.log(obtenerTarifa(null))      //$10.00


// if...else if...else

function example() {
    return condition1 ? value1 //  if
      : condition2 ? value2    //  else if
      : condition3 ? value3    //  else if
      : value4;                //  else
}
  
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}


// addEventeListener

// target.addEventListener(tipo, listener[, useCapture]);
// target.addEventeListener(tipo, funcionAnonima )

let i = 0
document.body.addEventListener('click',function(){  console.log(i),i++ })
document.body.addEventListener('click',() => { console.log(i++) } )

