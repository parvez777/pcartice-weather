//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



function searchWeather(){
    const input = document.getElementById('input').value;
    document.getElementById('input').value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2834000da3d2f3fe2a2c23d2c0779ac3`

    fetch(url)
    .then(res => res.json())
    .then(data => searchCountry(data))

    const searchCountry = (country) =>{
        const cityName = country.name;
        const countryName = country.sys.country;
        const TemperatureName = country.main.temp;
        const HumidityName = country.main.humidity;
        const visibilityName = country.visibility;
        const windSpeedName = country.wind.speed;
        const windDegName = country.wind.deg;
        const timezoneName = country.timezone;

        document.getElementById('city').innerText = cityName;
        document.getElementById('country').innerText = countryName;
        document.getElementById('Temperature').innerText = TemperatureName;
        document.getElementById('Humidity').innerText = HumidityName;
        document.getElementById('visibility').innerText = visibilityName;
        document.getElementById('windSpeed').innerText = windSpeedName;
        document.getElementById('windDeg').innerText = windDegName;
        document.getElementById('timezone').innerText = timezoneName;
    }


    
}