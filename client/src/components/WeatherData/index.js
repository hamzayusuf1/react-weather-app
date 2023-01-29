import React, { useContext } from "react";
import { AppContext } from "../../App";

import Weather from "../../assets/weather.png";
import CandS from "../../assets/cloudandsun.png";
import Sunny from "../../assets/sunny.png";
import Cloudy from "../../assets/cloudy.png";
import Rain from "../../assets/rain.png";
import Storm from "../../assets/storm.png";
import Haze from "../../assets/haze.png";

export const WeatherData = () => {
  // const [weatherData, setWeatherData] = useState("");

  const { weatherData } = useContext(AppContext);

  let IMG;

  // Using optional chaining to avoid error being thrown and application crashing

  if (weatherData?.weather?.[0].main === "Clear") {
    IMG = CandS;
  } else if (weatherData?.weather?.[0].main === "Clouds") {
    IMG = Cloudy;
  } else if (weatherData?.weather?.[0].main === "Rain") {
    IMG = Rain;
  } else if (weatherData?.weather?.[0].main === "Haze") {
    IMG = Haze;
  } else {
    IMG = Weather;
  }

  console.log(weatherData?.weather?.[0].main);

  if (!weatherData) {
    return <h1 className="px-3">Please enter a city and search</h1>;
  }

  return (
    <div className="flex h-[250px]">
      <div className="w-5/12 bg-white rounded-2xl p-5">
        <h2 className="mb-5 font-title font-bold text-2xl">
          {weatherData.name}
        </h2>
        <ul className="list-disc font-text">
          <li>Temperature: {weatherData.main.temp}</li>
          <li>Wind Speed: {weatherData.wind.speed}</li>
          <li>Humidity: {weatherData.main.humidity}</li>
          <li>Pressure: {weatherData.main.pressure}</li>
        </ul>
      </div>
      <div className="min-w-1/2 mx-auto">
        <img
          src={IMG}
          alt="forecast"
          className="max-h-full max-w-full h-full"
        />
      </div>
    </div>
  );
};
