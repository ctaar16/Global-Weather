// //API docs: https://openweathermap.org/current
// //API Key: 3d555794e8bf23873faadec90a413459
// // api.openweathermap.org/data/2.5/find?q=${city}&units=imperial


// const apiKey = '3d555794e8bf23873faadec90a413459';
// // const weatherData = {};





// // const button = document.querySelector('#submit');

// // button.addEventListener('click', async (e) => {
// //     e.preventDefault();
// //     grabWeather();
// // });


// async function grabWeather() {
//     let city = document.querySelector('#place').value;
//     console.log(city)
//     try {
//         const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
//         const response = await axios.get(url)
//         console.log(response.data) 
//        // weatherContainer(response.data) // response.data === weather
//     } catch (error) {
//         console.log(`Error: ${error}`)
//     }
// }
// grabWeather()



// // weather container :
//     const weatherContainer = (weather) => {
//     console.log("Weather Container", weather)
//     const temperature = document.createElement('p')                   // document.querySelector('.temp-value').innerHTML = `Temperature = ${temp}`// console.log(temp)
//     let temp = weather.main.temp
//     temperature.innerHTML = `Temperature: ${temp}`
//     document.querySelector('.temp-value').append(temperature)

//     const icon = document.createElement('img')
//     let pic = weather.weather[0].icon
//     icon.inner = `pic: ${pic}`
//     document.querySelector('.weather-icon').append(`pic: ${pic}`)

//     const location = document.createElement('p')
//     let place = weather.name
//     location.innerHTML = `Location: ${place}`
//     document.querySelector('.location').append(`Location: ${place}`)

//     const description = document.createElement('p')
//     let detail = weather.weather[0].main
//     description.innerHTML = `Weather Description: ${detail}`
//     document.querySelector('.weather-descrip').append(`Weather Description: ${detail}`)
// }


//Form
//     const form = document.querySelector('.theForm')
//     form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     city = document.querySelector('.place').value = `${inputValue}`
    
// })





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



 //temp

// const temperature = document.createElement('p')
// let temp = response.data.main.temp
// temperature.innerHTML = `temp: ${temp}`
// document.querySelector('.temp-value').append(`temp: ${temp}`)








//*************************Revised Code******************** */



const apiKey = '3d555794e8bf23873faadec90a413459';
const weatherData = {};
const button = document.querySelector("#submit");

button.addEventListener('click', async (e) => {
  e.preventDefault();
  grabWeather();
});

let place = document.querySelector("#place");
async function grabWeather() {
    let city = place.value;
    console.log(city);
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        const response = await axios.get(url)
        console.log(response.data)
        weatherContainer(response.data);
        // weatherContainer(response.data) // response.data === weather
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
grabWeather();

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
}
