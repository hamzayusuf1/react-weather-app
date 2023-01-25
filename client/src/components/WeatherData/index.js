import React from "react";

import IMG from "../../assets/weather.png";

export const WeatherData = () => {
  return (
    <div className="flex min-h-[300px]">
      <div></div>
      <div className="min-w-1/2">
        <img src={IMG} alt="forecast-image" />
      </div>
    </div>
  );
};
