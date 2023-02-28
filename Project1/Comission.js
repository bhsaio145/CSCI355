/* JS code for faq */
const buttons = document.querySelectorAll('.faq-button')
buttons.forEach(button => {
    button.addEventListener('click',() =>{
        button.parentNode.classList.toggle('active')
    })
})