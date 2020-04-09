const axios = require('axios');

const getClima = async (lat, lng) =>{

    const resp = await  axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d108341c9f1d3915b758c310551da641&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}
