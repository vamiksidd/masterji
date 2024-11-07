import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Weather() {
  return (
    <div className="flex-col justify-center bg-white p-5  rounded-md w-full sm:w-1/3 ">
      <h2 className="font-bold text-xl">How's the weather today?</h2>
      <div className="flex flex-col lg:flex-row gap-3 my-4">
        <Input
          type="text"
          placeholder="Enter your city name"
          className="w-full"
        />
        <Button variant="default" className="w-full sm:w-auto">
          Get Weather
        </Button>
      </div>

      {/* weather data */}
      <div className="border px-3 flex-col justify-items-center my-5 rounded shadow-md p-8">
        <div className="text-center">
          <h2 className="font-bold">Hyderabad, IN</h2>
          <p className="text-slate-400">light rain</p>
        </div>
        <p className="my-10">Icon goes here</p>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-[270px] max-h-[250px] text-sm sm:text-lg">
          <div className="border rounded-md p-4 flex-col justify-center">
            <h3 className="font-bold">30.23C</h3>
            <p className="text-slate-400">Current temperature</p>
          </div>{" "}
          <div className="border rounded-md p-4 flex-col justify-items-center">
            <h3 className="font-bold">32.86C</h3>
            <p className="text-slate-400">Feels Like</p>
          </div>{" "}
          <div className="border rounded-md p-4 flex-col justify-center">
            <h3 className="font-bold">58%</h3>
            <p className="text-slate-400">Humidity</p>
          </div>{" "}
          <div className="border rounded-md p-4 flex-col justify-center">
            <h3 className="font-bold">4.12 m/s</h3>
            <p className="text-slate-400">Wind Speed</p>
          </div>{" "}
        </div>
        <div className="my-10 text-center">
          <h4>Sunrise : 06:08:31 Am</h4>
          <h4>Sunset : 16:58:31 Pm</h4>
        </div>
      </div>
    </div>
  );
}
