/* JS code for animated navigation */
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})

/* JS code for image hover change */
const images = document.querySelectorAll(".gallery-product")

images.forEach((image) => {
    image.addEventListener('mouseenter', ()=>{
        image.classList.add('hover')
    })
    image.addEventListener('mouseleave', ()=> {
        image.classList.remove('hover')
    })
})