const apiKey = '3d555794e8bf23873faadec90a413459';
const weatherData = {};
const button = document.querySelector("#submit-button");
const weatherContainer = document.querySelector('.weather-container')
function clearWeatherContainer() {
    while (weatherContainer.lastChild) {
        weatherContainer.removeChild(weatherContainer.lastChild)
    }
}
button.addEventListener('click', async (e) => {
    e.preventDefault();
    if (weatherContainer.lastChild) {
        clearWeatherContainer();
    }
    await getWeather();
});
let place = document.querySelector("#place");
async function getWeather() {
    let city = place.value;
    console.log(city);
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        const response = await axios.get(url)
        console.log(response.data)
        buildWeatherContent(response.data);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
// weather container :
function buildWeatherContent(weather) {

//new icon code
    const icon = document.createElement('img');
    // icon.innerHTML = `Icon: ${weather.weather[0].icon}`;
    let pic = weather.weather[0].icon;
    icon.src = `http://openweathermap.org/img/wn/${pic}@2x.png`
    const iconEl = document.createElement('div');
    iconEl.append(icon);
    weatherContainer.append(iconEl);



    // === Create Temperature Element ===
    // Create paragraph element with temperature value.
    const temperature = document.createElement('p');
    temperature.innerHTML = `Temperature: ${weather.main.temp}`;
    
    // Create temperature div container and append temperature.
    const tempValueEl = document.createElement('div');
    tempValueEl.append(temperature);
    // Append temperature to weather container.
    weatherContainer.append(tempValueEl);
    // === Create Icon Element ===
    // Your comments and code here.
    

//new icon code
    // const icon = document.createElement('img');
    // // icon.innerHTML = `Icon: ${weather.weather[0].icon}`;
    // let pic = weather.weather[0].icon;
    // icon.src = `http://openweathermap.org/img/wn/${pic}@2x.png`
    // const iconEl = document.createElement('div');
    // iconEl.append(icon);
    // weatherContainer.append(iconEl);

//mac's help

    // const icon = document.createElement('img');
    // let pic = weather.weather[0].icon;
    // icon.src = `http://openweathermap.org/img/wn/${pic}@2x.png`
    // // icon.innerHTML = `pic: ${pic}`;
    // document.querySelector('.weather-icon').append(icon);





    // const icon = document.createElement('img');
    // let pic = weather.weather[0].icon;
    // icon.innerHTML = `pic: ${pic}`;
    // document.querySelector('.weather-icon').append(`pic: ${pic}`);
    




//new location code
    const location = document.createElement('p');
    location.innerHTML = `Location: ${weather.name}`;
    const locationEl = document.createElement('p');
    locationEl.append(location);
    weatherContainer.append(locationEl);


    // const location = document.createElement('p');
    // let place = weather.name;
    // location.innerHTML = `Selected City: ${place}`;
    // document.querySelector('.location').append(`Selected City: ${place}`);
   
    const description = document.createElement('p');
    description.innerHTML = `Description: ${weather.weather[0].main}`;
    const descriptionEl = document.createElement('p');
    descriptionEl.append(description);
    weatherContainer.append(descriptionEl);


    // const description = document.createElement('p');
    // let detail = weather.weather[0].main;
    // description.innerHTML = `Weather Description: ${detail}`;
    // document.querySelector('.weather-descrip').append(`Weather Description: ${detail}`);
    
    const maxTemp = document.createElement('p');
    maxTemp.innerHTML = `Max Temp: ${weather.main.temp_max}`;
    const maxTempEl = document.createElement('p');
    maxTempEl.append(maxTemp);
    weatherContainer.append(maxTempEl);


    // const maxTemp = document.createElement('p');
    // let high = weather.main.temp_max;
    // maxTemp.innerHTML = `High: ${high}`;
    // document.querySelector('.maxtemp').append(`High: ${high}`);
   

    const minTemp = document.createElement('p');
    minTemp.innerHTML = `Min Temp: ${weather.main.temp_min}`;
    const minTempEl = document.createElement('p');
    minTempEl.append(minTemp);
    weatherContainer.append(minTempEl);


    // const minTemp = document.createElement('p');
    // let low = weather.main.temp_min;
    // minTemp.innerHTML = `Low: ${low}`;
    // document.querySelector('.mintemp').append(`Low: ${low}`);
}