const axios = require('axios');


const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=2b80c8c7982ea2f3f22e4316ec853673&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}