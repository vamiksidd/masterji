
import { WeatherNews } from "./index.js"


export default function Home() {
  return (
    <div className="flex-col  p-3 my-5 justify-items-center">
      <div className="flex justify-center">

        <h1 className="font-bold text-2xl">MasterJi Live Dashboard</h1>
      </div>
      <WeatherNews />
    </div>
  );
}
