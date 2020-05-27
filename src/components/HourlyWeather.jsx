import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {FaCloud, FaWind, FaSun, FaMoon, FaTemperatureLow,FaTemperatureHigh, FaWater  } from 'react-icons/fa';

export default class HourlyWeather extends Component {
    constructor(props) {
     super(props);
     this.state={
        weatherObject:props.weatherObject
     }
   }

   getHours=(timeStamp)=>{
     let unix_timestamp = timeStamp
     var date = new Date(unix_timestamp * 1000);
     var hours = date.getHours();  
     var minutes = "0" + date.getMinutes();
     var seconds = "0" + date.getSeconds();
     var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
     return formattedTime;
   }

 render() {
 let {weatherObject} = this.state;
 let iconUrl = 'http://openweathermap.org/img/wn/'+weatherObject.weather.icon+'@2x.png';
 let sunRise,sunSet;

    sunRise = this.getHours(weatherObject.sys.sunrise);
    sunSet = this.getHours(weatherObject.sys.sunset);

      return (
       <div className="view intro-2">
       <div className='col'>
         <div className='row'>
           <div>
           </div>
           <div className='col'>
              <small >{' '+weatherObject.name}</small><br />
           </div>
           <div className='col'>
             <small>{weatherObject.main.temp}</small>
           </div>
           <div className='imgWeather' style={{backgroundImage: `url(${iconUrl})` }}>
             
           </div>
           <div className='weatherMainInfo'>
           
            <small>{weatherObject.main.feels_like+' '}</small>
            <small><FaWater />{'  '+weatherObject.main.humidity+'% '}</small><br />
            <small><FaTemperatureLow />{'  '+weatherObject.main.temp_max+' '}</small>
            <small><FaTemperatureHigh />{'  '+weatherObject.main.temp_min+' '}</small><br />
           </div>
         </div>
         <div className='col'>
           <div className='row'>
              <small><FaCloud />{' '+weatherObject.weather.description}</small>{'  '}
              <small><FaWind />{' '+weatherObject.wind.speed}</small>
           </div>
           <div className='row'>
             <small><FaSun />{' '+sunRise}</small>{'  '}
             <small><FaMoon />{' '+sunSet}</small>
           </div>
         </div>
       </div>
         <div>
         </div>
        </div>
      );
  }
 }

 HourlyWeather.propTypes = {
  weatherObject: PropTypes.object.isRequired
};
