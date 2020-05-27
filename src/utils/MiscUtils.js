 import {
          Condition200,
          Condition300,
          Condition500,
          Condition600,
          Condition800,
          Condition801
 } from '../components/weatherModules/ConditionModules';

 import {
          MainModule,
          HumidityModule,
          SolarModule,
          MiscModule
 } from '../components/weatherModules/TemperatureModules';

 export function getComponent(weatherID,count){
     let weatherCode=weatherID;
     const conditionWeather = getCondition(weatherCode);
     let componentObject;
     switch(parseInt(count)) {
      case 1:
       componentObject={
          ActualView: MainModule,
          count: 2
         };
        return componentObject;
        break;
      case 2:
        componentObject={
          ActualView:conditionWeather,
           count:3
         };
         return componentObject;
        break;
       case 3:
        componentObject={
          ActualView:SolarModule,
           count:4
         };
         return componentObject;
        break;
         case 4:
        componentObject={
          ActualView:HumidityModule,
           count:1
         };
         return componentObject;
        break;
      default:
        componentObject={
          ActualView: MainModule,
          count: 2
         };
        return componentObject;
      }
   }

  export function getCondition(condition){
     let condStr=condition.toString();
     const conditionWeather = condStr == "801" || condStr == "802"  || condStr == "803"  || condStr == "804"  ? 801 : condStr.substring(2,-1);
    switch(parseInt(conditionWeather)) {
      case 20:
        return Condition200;
        break;
      case 30:
        return Condition300;
        break;
       case 50:
        return Condition500;
        break;
        case 60:
        return Condition600;
        break;
         case 80:
        return Condition800;
        break;
         case 803:
        return Condition801;
        break;
      default:
        return Condition200;
        
   }
 }

  export function getHours(timeStamp,timezone)
        {
            const offset = Math.floor((timezone / 60)/60);
            var d = new Date(timeStamp*1000);
            var localTime = d.getTime();
            var localOffset = d.getTimezoneOffset() * 60000;
            var utc = localTime + localOffset;
            var nd = new Date(utc + (3600000*offset));
            utc = new Date(utc);
            const hours =  nd.getHours();  
            const minutes = "0" + nd.getMinutes();
            const formattedTime = hours + ':' + minutes.substr(-2);
            return formattedTime;
        }