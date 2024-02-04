const clock = document.querySelector("#clock");
const span = clock.querySelector("span");

function setClock() {
    const date = new Date();
    const hours = padding(date.getHours());
    const min = padding(date.getMinutes());
    const sec = padding(date.getSeconds());
    const time = document.createElement("span");
    span.innerText = `${hours}:${min}:${sec}`;
    
    

}


function padding(time){
    return String(time).padStart(2, "0");
}

setClock();
setInterval(setClock, 1000 );