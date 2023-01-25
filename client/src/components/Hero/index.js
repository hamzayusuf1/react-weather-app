import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-between min-h-[125px] px-10">
      <div className="flex items-center">
        <h1 className="text-5xl font-title">Weather Dashboard</h1>
      </div>
      <div className="">
        <p>14:17</p>
        <p>Tues 24th Jan, 2023</p>
      </div>
    </div>
  );
};
