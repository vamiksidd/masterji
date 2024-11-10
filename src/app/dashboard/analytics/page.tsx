import React from "react";
import { user_data } from "./user_data";

const column = ["Name", "Username", "Email", "Phone", "Website", "Company"];
export default function page() {
  const len = user_data.length;
  return (
    <div className="flex-col gap-10 p-3 w-full">
      {/* <div className="flex p-2 justify-between gap-10 bg-white shadow-sm rounded-t-sm">
                {column.map((tr, id) => (
                    <p key={id} className='text-slate-500'>{tr}</p>
                ))}
            </div> */}

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
          {user_data.map((item) => (
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
