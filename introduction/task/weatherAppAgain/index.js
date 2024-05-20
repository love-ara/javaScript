const apiUrl =
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey ="f00c38e0279b7bc85480c3fe775d518c";

const searchBox = document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {

        var data = await response.json();
    

        document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "icons/clouds.png";
        }else  if(data.weather[0].main == "Clear"){
            weatherIcon.src = "icons/clear.png";
    
        }else  if(data.weather[0].main == "Rain"){
            weatherIcon.src = "icons/rain.png";
        }else  if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "icons/drizzle.png";
        }else  if(data.weather[0].main == "Mist"){
            weatherIcon.src = "icons/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }
  
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
