/* JS Code for Expanding Cards */
const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    panel.addEventListener('click' , () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
/* JS code for Blurry Loading */
const page = document.querySelector('body')
let load = 0;
let int = setInterval(blurring, 30)
function blurring(){
    load++
    if(load > 49){
        clearInterval(int)
    }
    page.style.filter = `blur(${scale(load,0,50,30,0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}