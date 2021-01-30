let arrowMainTop = document.getElementById("arrowMainTop");
let arrowMainBottom = document.getElementById("arrowMainBottom");
let menuMainTop = document.getElementById("menuMainTop");
let menuMainBottom = document.getElementById("menuMainBottom");

arrowMainTop.addEventListener("click", function() {
    menuMainTop.classList.toggle("active");
})
arrowMainBottom.addEventListener("click", function() {
    menuMainBottom.classList.toggle("active");
})