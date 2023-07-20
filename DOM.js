// DOM

// document.method().property

// Selectors

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
let div = document.getElementById(nav)

// document.querySelector()
let elem = document.querySelector('.nav')


// css
document.getElementById(id).style.property = new style


//JavaScript Array Methods


// Array .length
// Array .toString()
// Array .pop()
// Array .push()
// Array .shift()
// Array .unshift()
// Array .join()
// Array .delete()
// Array .concat()
// Array .flat()
// Array .splice()
// Array .slice()



// What is fuck its a fucking callback ,motherfucker

function mostrarResultado(resultado) {
    document.getElementById("demo").innerHTML = resultado;
  }
  
  function calcular( num1, num2, myCallback) {
    let suma = num1 + num2;
    myCallback(suma); // mostrarResultado(suma)
    
  }
  
calcular(5, 5, mostrarResultado); // mostrarResulatado()



let imprimir_res = (res) => console.log(res)
let calc = (num1,num2, myCallback) => { let suma = num1 + num2; myCallback(suma) } 
calc(2,3, imprimir_res)

