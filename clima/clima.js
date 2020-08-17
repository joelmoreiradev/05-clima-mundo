const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=46587ebf98b6cbc20741791eae752321&units=metric`)

    const data = resp.data;
    const temperatura = data.main.temp;

    return temperatura;
}


module.exports = {
    getClima
}