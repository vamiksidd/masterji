import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="px-5  flex justify-items-center gap-12 py-5 bg-white shadow-md">
      <Link href={"/dashboard/kanban"}>Kanban</Link>
      <Link href={"/dashboard/weather-news"}>Weather/News</Link>
      <Link href={"/dashboard/analytics"}>Analytics</Link>
    </div>
  );
}
