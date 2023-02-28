/* JS code for sticky nav bar change */
const nav = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)
function fixNav(){
    if(window.scrollY > 100){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}

/* JS code for Auto Text*/
const textEl = document.getElementById('AutoText')
const text = 'hihi i like to draw sometimes!'
let idx = 1
let speed = 100

writeText()
function writeText(){
    textEl.innerText = text.slice(0, idx)
    idx++
    setTimeout(writeText, speed)
}