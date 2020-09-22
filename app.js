//API docs: https://openweathermap.org/current
//API Key: 3d555794e8bf23873faadec90a413459


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
grabWeather("aurora")

// weather container :

const weatherContainer = weather => {
   
   
 //temp
const temperature = document.createElement('p')
let temp = response.data.main.temp
temperature.innerHTML = `temp: ${temp}`
document.querySelector('.temp-value').append(`temp: ${temp}`)

//weather icon
const icon = document.createElement('p')
let pic = response.data.weather[3]
icon = innerHTML = `pic: ${pic}`
document.querySelector('.weather-icon').append(`pic: ${pic}`)

//location/city
const location = document.createElement('p')
let place = response.data.name
location.innerHTML = `place: ${place}`
document.querySelector('.location').append(`place: ${place}`)

//weather description
const description = document.createElement('p')
let detail = response.data.weather[2]
description.innerHTML = `detail: ${detail}`
document.querySelector('.weather-descrip').append(`detail: ${detail}`)
}






// //temp
// const temperature = document.createElement('p')
// let temp = response.data.main.temp
// temperature.innerHTML = `temp: ${temp}`
// document.querySelector('.temp-value').append(`temp: ${temp}`)

// //weather icon
// const icon = document.createElement('p')
// let pic = response.data.weather[3]
// icon = innerHTML = `pic: ${pic}`
// document.querySelector('.weather-icon').append(`pic: ${pic}`)

// //location/city
// const location = document.createElement('p')
// let place = response.data.name
// location.innerHTML = `place: ${place}`
// document.querySelector('.location').append(`place: ${place}`)

// //weather description

// const description = document.createElement('p')
// let detail = response.data.weather[2]
// description.innerHTML = `detail: ${detail}`
// document.querySelector('.weather-descrip').append(`detail: ${detail}`)


// //Button

    const button = document.createElement('p')













// Celsius  to Fahrenheit conversion
// function fahrenheit(temperature){
//     return (temperature * 9/5) + 32;
// }



