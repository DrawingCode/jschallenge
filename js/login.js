const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function login(event){
    event.preventDefault();
    const name = loginInput.value;
    localStorage.setItem("username", name);
    loginForm.classList.add("hidden");

}


const username = localStorage.getItem("username");

if(username == null) {
    loginForm.addEventListener("submit", login);
} else {
    const date = new Date();
    const hour = Number(date.getHours());
    console.log(hour);
    if (hour <= 6){
        greeting.innerText = `Good night, ${username}`;
    } else if (hour <= 12) {
        greeting.innerText = `Good morning, ${username}`;
    } else if (hour <= 18)
        greeting.innerText = `Good afternoon, ${username}`;
    else {
        greeting.innerText = `Good evening, ${username}`;
    }
    greeting.classList.remove("hidden");
    loginInput.classList.add("hidden");
}
