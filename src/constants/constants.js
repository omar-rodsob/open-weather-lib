export const URLS_TYPE = {
    current:"https://api.openweathermap.org/data/2.5/weather",
    hourly:"https://pro.openweathermap.org/data/2.5/forecast/hourly",
    hourlyTest:"https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&appid=439d4b804bc8187953eb36d2a8c26a02"
};

export const DEFAULT_MAIN={
  feels_like: 0,
  humidity: 0,
  pressure: 0,
  temp: 0,
  temp_max: 0,
  temp_min: 0
};

export const DEFAULT_WEATHER={
  description: "",
  icon: "",
  id: 0,
  main: "",
};

export const DEFAULT_WIND={
  deg: 0,
  speed: 0
};
export const DEFAULT_SYS={
  country: "",
  id: 0,
  sunrise: 0,
  sunset: 0,
  type: 0
};