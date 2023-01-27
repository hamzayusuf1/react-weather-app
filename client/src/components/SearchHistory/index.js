import React, { useContext } from "react";
import { AppContext } from "../../App";

const SearchHistory = () => {
  const { cities } = useContext(AppContext);

  console.log(cities);

  return (
    <div className=" mx-auto w-[275px] min-h-[300px]">
      <h1 className="font-title text-3xl mb-5">Recent Searches</h1>

      <ul>
        {cities.map((city) => {
          return (
            <li
              key={city}
              onClick={() => {
                console.log("API request for city clicked");
              }}
            >
              <a>{city}</a>
            </li>
          );
        })}
      </ul>

      {/* <ul className="font-text p-3">
        <li className="mb-2">London</li>
        <li className="mb-2">Dubai</li>
        <li className="mb-2">Tokyo</li>
        <li className="mb-2">Copenhagen</li>
      </ul> */}
    </div>
  );
};

export default SearchHistory;
