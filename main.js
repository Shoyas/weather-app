// Api linking
const weatherApi = {
    key : "996f3e756953dab8d206b4ba7b68af06",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather",
}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}



// get value from search box..

document.getElementById('locationSearch').addEventListener('click', (event) => {
    const searchValue = document.getElementById('locationInput').value;
    console.log(searchValue);
    weatherReport(searchValue); 
})

// find out weather report

function weatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();

    })
    .then(showWeatherReport);
}

// show weather report

function showWeatherReport(weather){
    console.log(weather);

    let displayWeather = document.getElementById('weatherBody');
    displayWeather.style.display = 'block';

    let cityName = document.getElementById('cityName');
    cityName.innerText = `${weather.name}, ${weather.sys.country}`;
    

    let temperature = document.getElementById('temperature');
    temperature.innerText = `${weather.main.temp}`;
    
    let maxTemp = document.getElementById('max-temp');
    maxTemp.innerText = `${weather.main.temp_max}`;

    let minTemp = document.getElementById('min-temp');
    minTemp.innerText = `${weather.main.temp_min}`;

    let weatherCondition = document.getElementById('weatherCondition');
    weatherCondition.innerText = `${weather.weather[0].main}`;
    backImage();

    let date = document.getElementById('date');
    let todayDate = new Date();
    console.log(todayDate);
    date.innerText = dateManagement(todayDate);
    
    

    function backImage(){
        if(weatherCondition.innerText == 'Rain'){
            document.body.style.backgroundImage = "url('images/rain.jpg')";
    
        }
        else if(weatherCondition.innerText == 'Clouds'){
            document.body.style.backgroundImage = "url('images/cloudy.jpg')";
        }
        else if(weatherCondition.innerText == 'Haze'){
            document.body.style.backgroundImage = "url('images/haze.jpg')";
        }
        
    }


} 

function dateManagement(dateArg){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    
    let date = dateArg.getDate();
    let month = months[dateArg.getMonth()];
    let year = dateArg.getFullYear();
    let day = days[dateArg.getDay()];

    return `${date} (${day}) ${month} ${year}`;

}



