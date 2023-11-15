let apiKey = "d8d80571ddf54527b7d3d1a5ab1c2554"
let city = ""
const searchInput = document.getElementById("search__bar")

function fetchWeatherData(){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        let name = data.name;
        let icon = data.weather[0].icon;
        let temp = data.main.temp;
        let speed = data.wind.speed;
        let description = data.weather[0].description;
        let humidity = data.main.humidity;
        console.log(name, icon, temp, speed, description, humidity);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src=`https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h"
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    })
}

document.querySelector(".search button").addEventListener("click", function(){
    city = searchInput.value;
    fetchWeatherData(city)
})


searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
    city = searchInput.value
    fetchWeatherData(city)
    }
})