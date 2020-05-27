import React,{Component} from 'react';

export const MainModule=function(props){
	let {weatherObject,styles}=props;
return (
	<div className={styles.feelsLike}>
                  <div className={styles.middleCircle}>
                      <div className={styles.innerCircle}>
                        <span className={styles.topTemp}>
                          {weatherObject.main.feels_like.toFixed(0)}
                        </span>
                        <span className={styles.miTemp}>
                          {weatherObject.main.temp.toFixed(0)}
                        </span>
                        <span className={styles.minMaxTemp}>
                          {weatherObject.main.temp_max.toFixed(0)+' '+weatherObject.main.temp_min.toFixed(0)}
                        </span>
                        <span className={styles.bottomTemp}>
                          {weatherObject.name}
                        </span>
                      </div>
                  </div>
                </div>
)
};

export const  HumidityModule=function(props){
	let {weatherObject,styles}=props;
return (
	<div>
	<div className={styles.waterdrop}>
	</div>
	<small className={styles.humidityTemp}>{weatherObject.main.humidity+' %'}</small>
	</div>
)
};

export const SolarModule=function(props){
	let {weatherObject,styles,sunSet,sunRise}=props;
return (
	<div className={styles.sunset}>
        	<span className={styles.sunText}>{sunRise}</span>
        	<span className={styles.moonText}>{sunSet}</span>
        <div className={styles.solar}/>
   </div>
	)
};

export const MiscModule=function(props){
	let {weatherObject,styles}=props;
return (
	<div>Algo</div>
)
};


