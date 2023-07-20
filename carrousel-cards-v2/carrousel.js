
const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')



const cards = document.querySelectorAll('.card')
const cardWidth = 20 // importante modificar con el width del card en %

let bloque = cards.length/3  // --> se ven 3 cards por bloque
let range = cards.length/bloque * cardWidth // --> limita el extremo negativo del rango [-n,0]

let operacion = 0
let posicion = 0

punto.forEach((cadaPunto, i) =>{
   punto[i].addEventListener('click',()=>{
      


      if (i==0) togglePos=(1)
      if (i==1) togglePos=(-1)

      operacion = posicion + 20*togglePos //50*togglePos --> con 20 se muestra una card por vez
      posicion = operacion


      // rango --> infinito?
      // rango [-range,0] --> range deberia ser negativo para evitar dolores de ano
      if(operacion >= 0 && operacion > 0) operacion = posicion =  0 
      if(operacion < 0 && operacion < (- range)) operacion = posicion = 0 //(-50) 

      console.log('operacion'+ operacion,i,posicion+'%')

      grande.style.transform = `translateX(${operacion}%)`

      punto.forEach( (cadaPunto, i)=>{
         punto[i].classList.remove('active')
         
      })
         punto[i].classList.add('active')
   })
})






