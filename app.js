
const apiKey = '3d555794e8bf23873faadec90a413459';
const weatherData = {};
const button = document.querySelector("#submit-button");

button.addEventListener('click', async (e) => {
  e.preventDefault();
  getWeather();
});

let place = document.querySelector("#place");
async function getWeather() {
    let city = place.value;
    console.log(city);
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        const response = await axios.get(url)
        console.log(response.data)
        weatherContainer(weather);
        // weatherContainer(response.data) // response.data === weather
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
getWeather();

// weather container :
const weatherContainer = (weather) => {
    
    const temperature = document.createElement('p')
    let temp = weather.main.temp
    temperature.innerHTML = `Temperature: ${temp}`
    document.querySelector('.temp-value').append(temperature)
    
    const icon = document.createElement('img')
    let pic = weather.weather[0].icon
    icon.inner = `pic: ${pic}`
    document.querySelector('.weather-icon').append(`pic: ${pic}`)
    
    const location = document.createElement('p')
    let place = weather.name
    location.innerHTML = `Location: ${place}`
    document.querySelector('.location').append(`Location: ${place}`)
   
    const description = document.createElement('p')
    let detail = weather.weather[0].main
    description.innerHTML = `Weather Description: ${detail}`
    document.querySelector('.weather-descrip').append(`Weather Description: ${detail}`)

    const maxTemp = document.createElement('p')
    let high = weather.weather[0].main.temp_max
    maxTemp.innerHTML = `High: ${high}`
    document.querySelector('.maxtemp').append(`High: ${high})`

    const minTemp = document.createElement('p')
    let low = weather.weather[0].main.temp_min
    minTemp.innerHTML = `Low: ${low}`
    document.querySelector('.mintemp').append(`Low: ${low}`)
}
