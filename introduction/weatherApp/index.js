const url = 'https://api.openweathermap.org/data/2.5/weather';

const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function (){
    weatherFunction('Pune');
});

async function weatherFunction(countryName){
    const temp = `${url}?q=${countryName}&appid=${apiKey}&units=metric`;
    try{
        const result = await fetch(temp);
        const data = await result.json();
        if(result.ok){
            showWeatherFunction(data);
        }else{
            alert('city not found. Please try again!');
        }
    }catch (error){
        console.error('Error fetching weather data:', error);
    }
}

function showWeatherFunction(data){
    $('#city-name').text(data.name);
    $('#date').text(moment().
        format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').
        html(`${data.main.temp}°C`);
    $('#description').
        text(data.weather[0].description);
    $('#wind-speed').
        html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#weather-icon').
        attr('src',
            `...`);
    $('#weather-info').fadeIn();

}