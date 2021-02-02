
let authorization = document.getElementById("signIn");
let registration = document.getElementById("signUp");
let forms = document.getElementById("windowForm");
let formSignIn = document.getElementById("windowForm1");
let formSignUp = document.getElementById("windowForm2");
let signInLine =document.getElementById("signInLine")
let signUpLine =document.getElementById("signUpLine")

authorization.addEventListener("click", SignInActive);
registration.addEventListener("click", SignInActive);



function SignInActive() {
    authorization.classList.toggle("active");
    registration.classList.toggle("active");
    forms.classList.toggle("left");
    formSignIn.classList.toggle("formActive");
    formSignUp.classList.toggle("formActive");
    signInLine.classList.toggle("lineActive");
    signUpLine.classList.toggle("lineActive");
}
