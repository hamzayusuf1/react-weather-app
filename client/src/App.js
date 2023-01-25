import React, { createContext, useState } from "react";

import "./App.css";
import { Hero } from "./components/Hero";
import { SearchForm } from "./components/SearchForm";
import { WeatherData } from "./components/WeatherData";

export const AppContext = createContext();

function App() {
  const [weatherData, setWeatherData] = useState("");

  return (
    <AppContext.Provider
      value={{
        weatherData,
        setWeatherData,
      }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-[#D3D3D3] min-h-screen">
          <SearchForm />
        </div>
        <div className="col-span-9 bg-[#F3F3F3] min-h-[50px]">
          <Hero />
          <WeatherData />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
