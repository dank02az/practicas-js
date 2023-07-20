let head = document.querySelector("head")

let css =`
:root {
    --primary: #9C27B0;
    --dark-primary: #7B1FA2;
    --light-primary:#E1BEE7;
    --primary-text:#212121;
    --secondary-text:#757575;
    --text-icons:#FFFFFF;
    --accent:#E040FB;
    --divider:#BDBDBD;
    --content:#E7E9EB
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}


.rounded {border-radius:3.5px}
.rad {border-radius: 100%;}
.shadow-lg {box-shadow: 1px 1px 10px 6px #8080805e}
.overflow-hidden {overflow: hidden;}
.my-5{ margin:5em auto}
.mx-auto {margin-inline: auto;}
.bg-primary {background-color: var(--primary)!important}

.container {
    max-width:1500px;
    margin-inline:auto;
}    

@media (max-height: 1200px) {
    .container {
        max-width: 900px!important;
    }
  }

@media (max-width: 500px) {
    .container-wd {
        max-width: 500px;
    }
}

`

let rootcss = `<style>${css}</style>`
head.insertAdjacentHTML("afterbegin",rootcss)


let carrousel = document.querySelector('.carrousel')
let grande_ = document.querySelector('.grande')
let puntos_ = document.querySelector('.carrousel .puntos')
let punto_ = document.querySelectorAll('.punto')


arrayProps =  ['rounded','shadow-lg','mx-auto','my-5']
arrayProps2 =  ['rad','shadow-lg']

arrayProps.forEach( (prop)=> { carrousel.classList.add(prop) })
carrousel.style.backgroundColor = 'white'
punto_.forEach( (elem) => { arrayProps2.forEach( (prop) => { elem.classList.add(prop)} ) }    )

punto_[0].classList.add('active')



document.body.classList.add('container')
document.body.classList.add('center')
document.body.style.backgroundColor = 'var(--content)'

