//API docs: https://openweathermap.org/current
//API Key: 3d555794e8bf23873faadec90a413459


//vars/const

 const containerElement = document.querySelector(".weather-container");
 const iconElement = document.querySelector(".weather-icon");
 const tempElement = document.querySelector(".temp-value p");
 const locationElement = document.querySelector(".location p");
 const descripElement = document.querySelector('.temp-descrip')


const apiKey = '3d555794e8bf23873faadec90a413459';
const weatherData = {};



async function grabWeather(city) {
    try {
        const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        const response = await axios.get(url)
        console.log(response.data) 

    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

grabWeather("denver")


getWeather(function(data) {
    console.log(data.list[0].weather[0].description)
})
