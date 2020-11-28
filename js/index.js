
let slides = document.querySelectorAll('.slider');
let  currentSlide = 0;
let slideInterval = setInterval(nextSlide,5000);
 
function nextSlide() {
    slides[currentSlide].className = 'slider';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider showing';
}


const buttonOpen = document.querySelector('.buttonPopup')
const popup = document.querySelector('.popup');


function OpenPopup() {
   popup.classList.add('open_popup');
}

buttonOpen.addEventListener('click', OpenPopup);