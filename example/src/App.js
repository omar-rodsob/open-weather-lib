
import React from 'react'

import { OpenWeather } from 'open-weather-lib'
import 'open-weather-lib/dist/index.css'

let  WEATHER_DATA = require('./WeatherData.json');

const App = () => {
  return <OpenWeather 
  			weatherData={WEATHER_DATA}
  		/>
}

export default App