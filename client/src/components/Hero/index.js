import React, { useState } from "react";
import { BiTimeFive } from "react-icons/bi";

export const Hero = () => {
  let time = new Date().toLocaleTimeString();
  const [Clock, setClock] = useState(time);

  const UpdateClock = () => {
    time = new Date().toLocaleTimeString();
    setClock(time);
  };

  setInterval(UpdateClock, 1000);

  return (
    <div className="flex justify-between items-center min-h-[125px] px-10">
      <div className="flex">
        <h1 className="text-5xl font-title">Weather Dashboard</h1>
      </div>
      <div className="">
        <div className="flex items-center">
          <BiTimeFive />
          <h1 className="px-1">{Clock}</h1>
        </div>
        <p>Tues 24th Jan, 2023</p>
      </div>
    </div>
  );
};
