"use client";
import React, { useEffect, useState } from "react";
import { user_data } from "./user_data";
import { Input } from "@/components/ui/input";


export default function page() {
  const [allUsers] = useState(user_data);
  const [users, setUsers] = useState(user_data);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
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


  const len = user_data.length;
  return (
    <div className="flex-col items-start gap-10 p-3 w-full">
      <Input
        className="my-5 w-max"
        type="text"
        value={searchInput}
        placeholder="Search users.."
        onChange={handleChange} />


      <table className="bg-white rounded-t-sm shadow-sm w-full table-auto ">
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
            <th className="px-4 py-2 text-left ml-auto"></th>
            <th className="px-4 py-2 text-left ml-auto"></th>
            <th className="px-4 py-2 text-left ml-auto"></th>
            <th className="px-4 py-2 text-left ml-auto"></th>
            <th className="px-4 py-2 text-left ml-auto">Users: {len}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
