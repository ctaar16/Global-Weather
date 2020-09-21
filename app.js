// API docs: https://openweathermap.org/current
//API Key: 3d555794e8bf23873faadec90a413459


// const apiKey = '3d555794e8bf23873faadec90a413459'

// async function getWeather(city) {
//     try {
//         const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//        const response = await axios.get(url)
//        console.log(response.data) 
//     } catch (error) {
//         console.log(`Error: ${error}`)
//     }
// }

// getWeather('Chicago')



//**************** 2nd SnowData API Below */



const apiKey = '3d555794e8bf23873faadec90a413459'

async function getWeather(city) {
    try {
        const url = `https://cors-anywhere.herokuapp.com/http://api.powderlin.es/station/791:WA:SNTL?startdate=2013-01-15&enddate=2013-01-15`
       const response = await axios.get(url)
       console.log(response.data) 
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

getWeather('Keystone')