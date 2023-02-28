/* JS code for medium Zoom */
mediumZoom('.zoom', {
    margin:60,
    background: '#000000D9',
})

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