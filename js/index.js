
/*Animation*/


let slides = document.querySelectorAll('.slider');
let  currentSlide = 0;
let slideInterval = setInterval(nextSlide,5000);
 
function nextSlide() {
    slides[currentSlide].className = 'slider';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider showing';
}


/*Popup*/

const buttonlow = document.querySelector('.lowText');
const closeButton = document.querySelector('.buttonClose');
const popUp = document.querySelector('.popup');


function OpenPopup(){
    popUp.classList.add('openPopUp');
}

function ClosePopup(){
    popUp.classList.remove('openPopUp');
}

