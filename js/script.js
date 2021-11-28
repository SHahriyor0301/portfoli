

// dark
const lamp = document.querySelector('.lamp i')
const body = document.querySelector('body')

lamp.addEventListener('click' , () => {
    body.classList.toggle('dark')
})
// burger js
const burger = document.querySelector('.burger-menu')
const menu = document.querySelector('.nav_list')
burger.addEventListener('click' , () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})
// scrol
const btn = document.querySelector('.to-top')

btn.addEventListener('click' , () => {
    scrollTo({
        top:0,
        behavior:'smooth'
    })
})
const header = document.querySelector('.header')
window.addEventListener('scroll' , () => {
    if(pageYOffset > 100){
        btn.style.transform = `scale(1)`
    }
    else{
        btn.style.transform = `scale(0)`
    }
    if(pageXOffset > 50){
        header.style.boxShadow = `0px 2px 5px 0px #999`
    }
})

// acardion 
const acrdionbtn = document.querySelectorAll('.btnacardion')
const acardion = document.querySelectorAll('.acrdiontext')
const aci = document.querySelectorAll('.acardion')
acrdionbtn.forEach(btnacardion => btnacardion.addEventListener('click' , () => {
    acardion.forEach(acrdiontext => acrdiontext.classList.toggle('active'))
    // acardion.classList.toggle('active')
    // aci.forEach(acrdiontext => acrdiontext.classList.toggle('active'))
    aci.classList.toggle('active')
}))
// =======SLIDER
// var
const next = document.querySelector('.arow-sl')
const prev = document.querySelector('.arow-sr')
const img = document.querySelectorAll('.slider')

let html = 0

next.addEventListener('click', () => {
    img[html].classList.remove('active')
    html++
    if(html == img.length){
        html = 0
    }
    img[html].classList.add('active')
})
prev.addEventListener('click', () => {
    img[html].classList.remove('active')
    if(html == 0){
        html = img.length
    }
    html--
    img[html].classList.add('active')
})
    


