import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

import IMG from "../../assets/weather.png";

export const WeatherData = () => {
  // const [weatherData, setWeatherData] = useState("");

  const { weatherData } = useContext(AppContext);

  if (!weatherData) {
    return <h1>Please enter a city and search</h1>;
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
        <img src={IMG} alt="forecast-image" className="max-h-full max-w-full" />
      </div>
    </div>
  );
};
