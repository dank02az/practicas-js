
let root = document.querySelector(":root") 
let cardLenght = getComputedStyle(root).getPropertyValue("--card-lenght")
let cardBlock = getComputedStyle(root).getPropertyValue("--card-block")


const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')
const cards = document.querySelectorAll('.card')

//let cardBlock = 4 // cantidad de cards que se muestran en pantalla visible
// let cardWidth = `calc(100%/${cardBlock})` 
let desplazamientoPorBloq = 100
let desplazamientoPorCard = 100/cards.length   
let range = desplazamientoPorCard * (cards.length - cardBlock) // --> limita el extremo negativo del rango [-n,0]



//desplazamientoPorCard = desplazamientoPorBloq // --> ver que hace :)

// 
// 
// grande.style.width = `calc(${cardWidth}*${cards.length})`
// cards.forEach( (cadaCard)=>{  cadaCard.style.width = cardWidth  } )

root.style.setProperty('--card-length', `${cards.length}`)
root.style.setProperty('--range',`${range}`)
//root.style.setProperty('--card-block',`${cardBlock}`)

// root.style.setProperty('--card-block', `${cardBlock}`)


let operacion = 0
let posicion  = 0

punto.forEach((cadaPunto, i) =>{
   punto[i].addEventListener('click',()=>{
      
      cardBlock = getComputedStyle(root).getPropertyValue("--card-block")
      root.style.setProperty('--card-block',`${cardBlock}`)

      console.log(range)

      if (i==0) togglePos=(1)
      if (i==1) togglePos=(-1)

      operacion = posicion + desplazamientoPorCard*togglePos //50*togglePos --> con 20 se muestra una card por vez
      posicion = operacion


      // rango --> infinito?
      // rango [-range,0] --> range deberia ser negativo para evitar dolores de ano
      if(operacion >= 0 && operacion > 0) operacion = posicion =  0 
      if(operacion < 0 && operacion < (- range) ) operacion = posicion = (- range) //(-50) 

      console.log('operacion'+ operacion,i,posicion+'%')

      grande.style.transform = `translateX(${operacion}%)`

      punto.forEach( (cadaPunto, i)=>{
         punto[i].classList.remove('active')
         
      })
         punto[i].classList.add('active')
   })
})


