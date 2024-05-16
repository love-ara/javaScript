const apiUrl =
'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey =
'863242cfb2b1d357e6093d9a4df19a4b';

const searchBox = document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const whetherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {

        var data = await response.json();
    

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".date").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Lm/hr";
    
        if(data.weather[0].main == "Clouds"){
            whetherIcon.src = "icons/clouds.png";
        }else  if(data.weather[0].main == "Clear"){
            whetherIcon.src = "icons/clear.png";
    
        }else  if(data.weather[0].main == "Rain"){
            whetherIcon.src = "icons/rain.png";
        }else  if(data.weather[0].main == "Drizzle"){
            whetherIcon.src = "icons/drizzle.png";
        }else  if(data.weather[0].main == "Mist"){
            whetherIcon.src = "icons/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }
  
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
