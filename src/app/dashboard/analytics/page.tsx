/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { user_data, graph_data } from "./user_data";
import { Input } from "@/components/ui/input";
import Barchart from "@/components/ui/Barchart.jsx";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import Linechart from "@/components/ui/Linechart.jsx"
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function Page() {
  const [allUsers] = useState(user_data);
  const [users, setUsers] = useState(user_data);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput === "") {
      setUsers(allUsers);
    } else {
      const filteredItems = allUsers.filter((user) =>
        user.full_name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setUsers(filteredItems);
    }
  }, [searchInput, allUsers]);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Sales Performance',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  });

  useEffect(() => {
    // Update chart data if graph_data is available
    if (graph_data.length > 0) {
      setChartData({
        labels: graph_data.map((data) => data.month),
        datasets: [{
          label: 'Sales Performance',
          data: graph_data.map((data) => data.sales),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      });
    }
  }, []); // Remove graph_data from the dependency array

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
        
          label: function (context: { raw: any; }) {
            return context.raw;
          }
        }
      }
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales Performance'
        }
      }
    }
  };

  const len = user_data.length;

  return (
    <div className="flex-col items-start gap-10 p-3 w-full">
      <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 h-[500px] md:grid-cols-2 h- gap-5 bg-white rounded-md shadow-sm py-5 mt-5">
        <div className="flex h-[100%] justify-center place-content-center">
          <Barchart data={chartData} options={options} />
        </div>
        <div className=" ">
          <Linechart />
        </div>
      </div>

      <Input
        className="my-5 w-max"
        type="text"
        value={searchInput}
        placeholder="Search users..."
        onChange={handleChange}
      />
      <table className="bg-white rounded-t-sm shadow-sm w-full table-auto">
        <thead>
          <tr className="text-sm text-slate-500">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Website</th>
            <th className="px-4 py-2 text-left">Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id} className="text-sm font-bold border-t">
              <td className="px-4 py-2">{item.full_name}</td>
              <td className="px-4 py-2">{item.username}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.phone}</td>
              <td className="px-4 py-2">{item.domain_name}</td>
              <td className="px-4 py-2">{item.company_name}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="w-full">
          <tr className="text-sm text-slate-500">
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left"></th>
            <th className="px-4 py-2 text-left"></th>
            <th className="px-4 py-2 text-left"></th>
            <th className="px-4 py-2 text-left"></th>
            <th className="px-4 py-2 text-left">Users: {len}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
