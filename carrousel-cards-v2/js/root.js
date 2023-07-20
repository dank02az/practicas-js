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
}
.container-wd {
    max-width:1500px;
}
.rounded {border-radius:3.5px}
.rad {border-radius: 100%;}
.shadow-lg {box-shadow: 1px 1px 10px 6px #8080805e}
.overflow-hidden {overflow: hidden;}
.my-5{ margin:5em auto}
.mx-auto {margin-inline: auto;}
.bg-primary {background-color: var(--primary)!important}

@media (max-height: 1200px) {
    .container-wd {
        max-width: 900px!important;
    }
  }

@media (max-width: 500px) {
    .container-wd {
        max-width: 500px;
    }
    .carrousel .grande {
        width : calc(200%*3)!important
    }
}  



`

let rootcss = `<style>${css}</style>`
head.insertAdjacentHTML("afterbegin",rootcss)


let carrousel = document.querySelector('.carrousel')
let grande_ = document.querySelector('.grande')
let puntos_ = document.querySelector('.carrousel .puntos')
let punto_ = document.querySelectorAll('.punto')


arrayProps =  ['rounded','mx-auto','my-5','container-wd']
arrayProps2 =  ['rad','shadow-lg']

arrayProps.forEach( (prop)=> { carrousel.classList.add(prop) })
punto_.forEach( (elem) => { arrayProps2.forEach( (prop) => { elem.classList.add(prop)} ) }    )

punto_[0].classList.add('active')

document.body.setAttribute('style','background-color:#E7E9EB')


