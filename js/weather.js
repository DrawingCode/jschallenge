
// 브라우저에서 위치정보를 줌
// arg1: 올바른 작동일 때 arg2: 에러났을 때
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY = "8d4bce3bb47c3908e34e1bf8d3a9bd6a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            // html 만들어줘야 함
            const weather = document.querySelector("#weather span"); 
            weather.innerText = `${data.name} is ${data.weather[0].main}`;
    }); // js가 url에 요청을 보냄
    
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
