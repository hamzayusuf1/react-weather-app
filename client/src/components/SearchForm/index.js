import React, { useEffect, useState, useContext } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { AppContext } from "../../App";

const API_KEY = "e8f6a67301c717c985ba495ce7bc1b79";

export const SearchForm = () => {
  const { weatherData, setWeatherData } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");
  const [searchPlace, setSearchPlace] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (searchPlace) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        setWeatherData(data);

        console.log(weatherData);

        setSearchPlace("");
        setInputValue("");
      }
    }
    fetchData();
  }, [searchPlace]);

  console.log(searchPlace);

  const formSubmit = (e) => {
    e.preventDefault();
    setSearchPlace(inputValue);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[125px] px-10">
        <form className="flex" onSubmit={formSubmit}>
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="search"
            className="rounded-l-lg shadow-md px-2"
            placeholder="Search"
          />
          <button
            onClick={formSubmit}
            className="inline-block px-4 py-2.5 bg-[#4374B7] text-white font-medium text-xs rounded-r-lg shadow-md hover:bg-[#598BCF] hover:shadow-lg transition duration-150 ease-in-out flex items-center"
          >
            <SearchIcon size={25} />
          </button>
        </form>
      </div>
    </>
  );
};
