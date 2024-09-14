const signup_button = document.getElementById("signup_click");
const signin_button = document.getElementById("signin_click");
const up_form = document.getElementById("up_form");
const under_form = document.getElementById("under_form");


signup_button.addEventListener("click", () => {
    up_form.classList.add("upper");
    under_form.classList.remove("under");
})

signin_button.addEventListener("click", () => {
    under_form.classList.add("under");
    up_form.classList.remove("upper");
})