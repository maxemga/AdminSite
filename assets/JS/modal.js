
let authorization = document.getElementById("signIn");
let registration = document.getElementById("signUp");
let forms = document.getElementById("windowForm");
let formSignIn = document.getElementById("windowForm1");
let formSignUp = document.getElementById("windowForm2");
let signInLine =document.getElementById("signInLine")
let signUpLine =document.getElementById("signUpLine")
let modalBackground = document.getElementById("modalOverlay");
let modalWindow = document.getElementById("modalWindow");
let loginButton = document.getElementById("logginButton");

authorization.addEventListener("click", SignInActive);
registration.addEventListener("click", SignInActive);

loginButton.addEventListener("click", OpenModalWindow);
modalBackground.addEventListener("click", CloseModalWindow);

function SignInActive() {
    authorization.classList.toggle("active");
    registration.classList.toggle("active");
    forms.classList.toggle("left");
    formSignIn.classList.toggle("formActive");
    formSignUp.classList.toggle("formActive");
    signInLine.classList.toggle("lineActive");
    signUpLine.classList.toggle("lineActive");
}

function OpenModalWindow() {
    modalWindow.classList.add("activeWindow");
    modalBackground.classList.add("activeOverlay");
}

function CloseModalWindow() {
    modalWindow.classList.remove("activeWindow");
    modalBackground.classList.remove("activeOverlay");
}