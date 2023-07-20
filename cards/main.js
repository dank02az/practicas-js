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


document.body.classList.add('container')
document.body.classList.add('center')
document.body.style.backgroundColor = 'var(--content)'
