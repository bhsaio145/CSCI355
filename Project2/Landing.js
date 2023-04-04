/* JS code for Vertical Slider */
const sliderContainer = document.querySelector('.VerticalSlider')
const slideRight = document.querySelector('.right-side')
const slideLeft = document.querySelector('.left-side')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length
let activeSlideIndex = 0
upButton.addEventListener('click',() => changeSlide('up'))
downButton.addEventListener('click',() => changeSlide('down'))
const changeSlide = (direction) => {
    console.log(activeSlideIndex)
    const slideHeight = sliderContainer.clientHeight
    //Increment Index+1 when pressing up button
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    } 
    //Increment Index-1 when pressing down button
    else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        } 
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex*slideHeight}px)`
    slideLeft.style.transform = `translateY(-${activeSlideIndex*slideHeight}px)`
}