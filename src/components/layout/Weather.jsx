"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { fetchDataFromApi } from "@/utils/api";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const convertToTimeWithoutTimezone = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  };

  // Convert sunrise and sunset times (without timezone adjustment)
  const sunriseTime = weatherData
    ? convertToTimeWithoutTimezone(weatherData.sys.sunrise)
    : null;
  const sunsetTime = weatherData
    ? convertToTimeWithoutTimezone(weatherData.sys.sunset)
    : null;

  const getWeather = async () => {
    try {
      const res = await fetchDataFromApi(
        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_API_KEY}&q=${city}&units=metric`
      );

      if (!res) {
        throw Error("Invalid input");
      }
      setWeatherData(res);
      setCity("");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("error in weather:", error);
    }
  };

  return (
    <div className="flex-col justify-center bg-white p-5  rounded-md w-full md:w-1/3 ">
      <h2 className="font-bold text-xl">How's the weather today?</h2>
      <div className="flex flex-col lg:flex-row gap-3 my-4">
        <Input
          type="text"
          value={city}
          placeholder="Enter your city name"
          className="w-full"
          onChange={handleChange}
        />
        <Button
          variant="default"
          className="w-full sm:w-auto"
          onClick={getWeather}
        >
          Get Weather
        </Button>
      </div>

      {/* weather data */}
      {weatherData && (
        <div className="border px-3 flex-col justify-items-center my-5 rounded shadow-md p-8">
          <div className="text-center">
            <h2 className="font-bold">{weatherData?.name}</h2>
            <p className="text-slate-400">{weatherData?.weather[0].main}</p>
          </div>
          <p className="my-10">
            <Image
              height={50}
              width={50}
              src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`}
              alt="icons"
            />
          </p>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-[270px] max-h-[250px] text-sm md:text-md">
            <div className="border rounded-md p-4 flex-col justify-center">
              <h3 className="font-bold">{weatherData?.main.temp}℃</h3>
              <p className="text-slate-400">Current temperature</p>
            </div>{" "}
            <div className="border rounded-md p-4 flex-col justify-items-center">
              <h3 className="font-bold">{weatherData?.main.feels_like}℃</h3>
              <p className="text-slate-400">Feels Like</p>
            </div>{" "}
            <div className="border rounded-md p-4 flex-col justify-center">
              <h3 className="font-bold">{weatherData?.main.humidity}%</h3>
              <p className="text-slate-400">Humidity</p>
            </div>{" "}
            <div className="border rounded-md p-4 flex-col justify-center">
              <h3 className="font-bold">{weatherData?.wind.speed} m/s</h3>
              <p className="text-slate-400">Wind Speed</p>
            </div>{" "}
          </div>
          <div className="my-10 text-center">
            <h4>Sunrise : {sunriseTime}</h4>
            <h4>Sunset : {sunsetTime}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
