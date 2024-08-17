const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initSlider();

function initSlider(){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 4000);
}

function showSlide(){
    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); 
    });
    slides[slideIndex].classList.add("displaySlide");  
}

function prevSlide(){
    slideIndex--;
    if (slideIndex < 0){
        slideIndex = slides.length - 1;
    }
    showSlide();
}

function nextSlide(){
    slideIndex++;
    if (slideIndex >= slides.length){
        slideIndex = 0;
    }
    showSlide();
}
