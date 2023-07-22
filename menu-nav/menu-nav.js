let body = document.body
let toggleMenu = document.querySelector('.toggle-menu')
let menu = document.querySelector('nav ul')


toggleMenu.addEventListener('click',()=>{
    if(body.classList == 'active'){
        body.classList.remove('active')
        menu.style.transform = 'translateX(-100%)'
    }else{
        body.classList.add('active')
        menu.style.transform = 'translateX(0%)'
    }

})