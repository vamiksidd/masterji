import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: { API_KEY: process.env.NEXT_API_KEY },
  images: {
    domains: ['openweathermap.org'], 
  },
};

export default nextConfig;
