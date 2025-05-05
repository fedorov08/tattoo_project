const popup_window = document.querySelector("#pop-up");
const summon_button = document.querySelector(".consult");
const close_form = document.querySelector(".close");
const submit = document.querySelector(".button_sub");



summon_button.addEventListener("click",function (e){
    popup_window.style.display = "block"
})

close_form.addEventListener("click",function (e){
    popup_window.style.display = "none"
})
