var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=0581f9a5ddefed038ff8d64139a72e8f&units=Imperial';

//0581f9a5ddefed038ff8d64139a72e8f


module.exports = {
    getTemp: function (location) {
        var encodeLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;
        return axios.get(requestUrl).then(function (res) {
            debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }).catch(function (err) {
            throw new Error(err.response.data.message);
        });
    }
}