const rp = require('request-promise')

module.exports = async function(city = '') {
    if(!city) {
        throw new Error('Error missing city value');
        return
    } 

    const KEY = '45493c89804830dc82bad199405933d3' //https://home.openweathermap.org/api_keys
    const uri = 'http://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true
    }

    try {
        const data = await rp(options)
        const celsius = (data.main.temp - 32) * 5/9
        

        return {
            weather: `${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    } catch(error) {
        return {
            weather: null,
            error: error.error.message
        }
    }

    
}