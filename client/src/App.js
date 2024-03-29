import React, { createContext, useState } from "react";
import { Helmet } from "react-helmet";

import "./App.css";
import { Hero } from "./components/Hero";
import { SearchForm } from "./components/SearchForm";
import SearchHistory from "./components/SearchHistory";
import { WeatherData } from "./components/WeatherData";

export const AppContext = createContext();

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );

  return (
    <AppContext.Provider
      value={{
        weatherData,
        setWeatherData,
        cities,
        setCities,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Weather app</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-[#D3D3D3] min-h-screen">
          <SearchForm />
          <SearchHistory />
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
