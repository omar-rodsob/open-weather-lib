export function GetTempCelcius(temp,unit){
  let tempInt = unit =='metric'? parseInt(temp):fToC(temp);
   if (tempInt<-10){
       tempInt=-10;
   }else if(tempInt>-10 && tempInt<0){
       tempInt=0;
   }else if(tempInt>0 && tempInt<10){
       tempInt=10;
   }else if(tempInt>10 && tempInt<20){
       tempInt=20;
   }else if(tempInt>20 && tempInt<30){
       tempInt=30;
   }else if(tempInt>30 && tempInt<40){
       tempInt=40;
   }else if(tempInt>40){
       tempInt=50;
   }
   switch(tempInt) {
      case -10:
        return "#300fa9";
        break;
         case 0:
        return "#0e30b7";
        break;
         case 10:
        return "#0e7fb7";
        break;
         case 20:
        return "#e4f30c";
        break;
         case 30:
        return "#f79a22";
        break;
         case 40:
        return "##c51919";
        break;
         case 50:
        return "#f33f04";
        break;
      default:
        return "#ff0000";
        
   }
 }

function fToC(fahrenheit) 
  {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    return fToCel.toFixed(0);
  } 