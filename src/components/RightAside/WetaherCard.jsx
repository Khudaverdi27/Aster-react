import React, { useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { FiCrosshair } from "react-icons/fi";
import { useFetchWeatherData } from "../../hooks/useFetch";

export const WetaherCard = () => {
  const [weatherInfo, setWeather, weatherLoading] = useFetchWeatherData();

  useEffect(() => {
    setWeather();
  }, []);


  return (
    <div className="bg-white p-4">
      <div className="flex justify-between border-b ">
        <p>{weatherInfo.name}</p>
        <FiCrosshair />
      </div>
      <div>
        <div className="flex justify-between">
          <p>Clouds</p>
          <span className="text-2xl">
            13 <sup>o </sup>C
          </span>
          <div className="size-[50px]">
            <span className="text-[#dcc674] size-full">
              <FaSun />
            </span>
          </div>
        </div>
      </div>
      <div className="flex text-sm space-x-4">
        <button>Celcius</button>
        <button>Fahrenheit</button>
      </div>
    </div>
  );
};
