import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {getCurrentWeather} from './service/Service';

import {URLS_TYPE,DEFAULT_MAIN,DEFAULT_WEATHER,DEFAULT_WIND,DEFAULT_SYS} from './constants/constants';
import CurrentWeather from './components/CurrentWeather';


import styles from './weather.scss';

export class OpenWeather extends Component {
    constructor(props) {
     super(props);
     this.state={
        isLoading:true,
        errorMessage:'',
        weatherObject:{
          name:'',
          main:DEFAULT_MAIN,
          weather: DEFAULT_WEATHER,
          wind: DEFAULT_WIND,
          type:DEFAULT_SYS,
          timezone:0,
          unit:props.weatherData.unit
        },
        weatherData:props.weatherData,
        errCode:0,

     }
   }

   componentDidMount() {
     let {timeRequest}=this.state.weatherData;
     this.getWeather();
     timeRequest = timeRequest < 20 ? 20 : timeRequest;
     const miliSecondsInterval=timeRequest*60000;
      setInterval(
    function() {
         this.getWeather();
    }
    .bind(this),
    miliSecondsInterval
    );
    }

   getWeather=()=>{
     const that = this;
     let {weatherData} = that.state;
     let qParam;
      if (typeof weatherData.location !== 'undefined'){
          qParam='?q='+weatherData.location.city+','+weatherData.location.country;
      }else{
          qParam='?lat='+weatherData.cord.lat+'&lon='+weatherData.cord.lon;
      }
      
      const unit = weatherData.unit
      let url_weather = URLS_TYPE.current +qParam+'&units='+unit+'&appid='+weatherData.appId;
     getCurrentWeather(url_weather)
      .then(function (response) {
        that.setState({
            isLoading:false,
            weatherObject:{
              name:response.data.name,
              main:response.data.main,
              wind:response.data.wind,
              weather:response.data.weather[0],
              sys:response.data.sys,
              timezone:response.data.timezone,
              unit:that.state.weatherData.unit,
            }
            
        })
      })
      .catch(function (error) {
        that.setState({
          isLoading:false,
          errorMessage:error.message,
          errCode:error.cod ? eror.cod:1
        })
      });
   }

 render() {
   let {isLoading,weatherObject,errCode}=this.state;
   if(isLoading) {
      return (
      <div className={styles.formLoader}>
        <ul className={styles.formLoading}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      );
    } else if (errCode==0){
      return (
       <div className="view intro-2">
         <CurrentWeather 
            weatherObject={weatherObject}
            styles={styles}
         />
        </div>
      );
    } else{
      return(
        <div className="view intro-2">
         <div className={styles.circleError}>
          </div>
        </div>
        );
    }
  }
 }

 OpenWeather.propTypes = {
  weatherData: PropTypes.object.isRequired
};
