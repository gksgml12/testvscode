const API_KEY="d2c902d6ac6326cbb6156dacfebcb420"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url)
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-Child")
        const weather = document.querySelector("#weather span:last-Child")
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name;
        });
}

function onGeoError(){
    alert("Can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)