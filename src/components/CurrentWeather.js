import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {GetTempCelcius} from '../utils/Units';

import {
    getComponent,
    getHours
} from '../utils/MiscUtils'

 import {MainModule} from '../components/weatherModules/TemperatureModules';

export default class CurrentStorm extends Component {
    constructor(props) {
     super(props);
     this.state={
        weatherObject:props.weatherObject,
        ActualView: MainModule,
        count:1
     }
   }

   componentDidMount() {
    setInterval(
      function() {
          this.getMainComponent();
      }
      .bind(this),
      5000
    );
   }

   getMainComponent=()=>{
    let componentObject = getComponent(this.state.weatherObject.weather.id,this.state.count);
      this.setState({
          ActualView: componentObject.ActualView,
          count: componentObject.count
         });
   }

render() {
     let {weatherObject,ActualView} = this.state;
     let sunRise,sunSet;
     let {styles} = this.props
    sunRise = getHours(weatherObject.sys.sunrise,weatherObject.timezone);
    sunSet = getHours(weatherObject.sys.sunset,weatherObject.timezone);
    let tempColor=GetTempCelcius(weatherObject.main.temp.toFixed(0),weatherObject.unit);
    const  styleColor = {
      backgroundColor: tempColor,
      backgroundImage: "linear-gradient(rgba(250,0,0,0.5),transparent)"  
    };
      return (
      <div className="view intro-2">
         <div className={styles.circleContainer} style={styleColor}>
            <section className={styles.stripe} id={styles.storm}>
              <div className={styles.container}>
                 <ActualView
                   weatherObject={weatherObject}
                   styles={styles}
                   sunSet={sunSet}
                   sunRise={sunRise}
                 />
              </div>
            </section>
         </div>
      </div>
      );
  }
 }

 CurrentStorm.propTypes = {
  weatherObject: PropTypes.object.isRequired
};
