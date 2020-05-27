const axios = require('axios');

export const getCurrentWeather=(url_weather)=>{
	return axios.get(url_weather);
}