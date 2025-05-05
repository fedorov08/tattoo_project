const back = document.querySelector("#back");
const forward = document.querySelector("#forward");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".sliders");

let index=0
const totalSlides = slides.length
function UpdateSlider ()
{
    slider.style.transform=`translateX(-${index*100}%)`
}
back.addEventListener("click", function() {
    index=(index==0) ? totalSlides-1 : index-1
    UpdateSlider()
})
forward.addEventListener("click", function() {
    index=(index==totalSlides-1) ? 0 : index+1
    UpdateSlider()
})
