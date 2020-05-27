import React,{Component} from 'react';

export const Condition200 =function(props){
	let {weatherObject,styles}=props;
return (
	<div>
   <div className={styles.icon}>
        <div className={styles.cloud}>
          <div className={styles.weatherText}>{weatherObject.weather.description}</div>
        </div>
        <div className={styles.lightning}>
          <div className={styles.bolt} id={styles.bolte}></div>
          <div className={styles.bolt}>
          </div>
        </div>
         
      </div>
     
	</div>
)
};

export const Condition300 =function(props){
	let {weatherObject,styles}=props;
return (
	<div>
		<div className={styles.icon+' '+styles.rainy}>
        <div className={styles.cloud}>
          <div className={styles.weatherText}>{weatherObject.weather.description}</div>
        </div>
        <div className={styles.rain}></div>
      </div>
    
	</div>
)
};

export const Condition500 =function(props){
	let {weatherObject,styles}=props;
return (
	<div>
		<div className={styles.icon+' '+styles.rainy}>
        <div className={styles.cloud}>
           <div className={styles.weatherText}>{weatherObject.weather.description}</div>
        </div>
        <div className={styles.rain}></div>
      </div>
	</div>
)
};

export const Condition600 =function(props){
	let {weatherObject,styles}=props;
return (
	<div>
		<div className={styles.icon+' '+styles.flurries}>
        <div className={styles.cloud}>
          <div className={styles.weatherText}>{weatherObject.weather.description}</div>
        </div>
        <div className={styles.snow}>
          <div className={styles.flake}></div>
          <div className={styles.flake}></div>
        </div>
      </div>
   	</div>
)
};

export const Condition800 =function(props){
let {weatherObject,styles}=props;
return (
      <div className={styles.icon+' '+styles.sunny}>
        <div className={styles.sun}>
          <div className={styles.rays}></div>
        </div>
        <div className={styles.weatherTextAbsolute}>{weatherObject.weather.description}</div>
      </div>
)
};

export const Condition801 =function(props){
let {weatherObject,styles}=props;
return (
	<div>
     	<div className={styles.icon+' '+styles.cloudy}>
        <div className={styles.cloud}>
          <div className={styles.weatherText}>{weatherObject.weather.description}</div>
        </div>
        <div className={styles.cloud}></div>
      </div>
    	
	</div>
)
};