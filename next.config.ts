import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: { 
    WEATHER_API_KEY: process.env.NEXT_WEATHER_API_KEY ,
    NEWS_API_KEY: process.env.NEXT_NEWS_API_KEY,
  },
  images: {
    domains: ["openweathermap.org"],
  },
};

export default nextConfig;
