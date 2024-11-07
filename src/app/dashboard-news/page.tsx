import Weather from "@/components/layout/Weather.jsx"
import News from "@/components/layout/News.jsx"
export default function WeatherNews() {
    return <div className="flex flex-col sm:flex-row w-full min-h-fit border p-4 gap-5 m-5 font-[family-name:var(--font-geist-sans)]">
        <Weather />
        <News />
    </div>
}