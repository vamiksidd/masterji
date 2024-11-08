"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAuthor,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function News() {
  const [isChecked, setIsChecked] = useState(false);
  const [view, setView] = useState("grid-cols-1"); // Default to list view

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    setView((prevView) =>
      prevView === "grid-cols-1" ? "grid-cols-2" : "grid-cols-1"
    );
  };

  return (
    <div className="bg-white p-5 rounded-md w-full md:w-3/4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">
          What's happening around the world?
        </h1>

        {/* toggle buttons */}
        <div className="bg-gray-200 text-sm  text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex  items-center">
          <button
            className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2"
            id="list"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="fill-current w-4 h-4 mr-2"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span className="md:block hidden">List view</span>
          </button>
          <label className="flex cursor-pointer bg-black rounded-full select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <div
                className={`box block h-8 w-14 rounded-full ${
                  isChecked ? "bg-primary" : "bg-dark"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                  isChecked ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
          <button
            className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active"
            id="grid"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="fill-current w-4 h-4 mr-2"
            >
              <rect x="3" y="3" width="6" height="6"></rect>
              <rect x="14" y="3" width="6" height="6"></rect>
              <rect x="14" y="14" width="6" height="6"></rect>
              <rect x="3" y="14" width="6" height="6"></rect>
            </svg>
            <span className="md:block hidden">Grid view</span>
          </button>
        </div>
      </div>

      <div
        className={`my-5 ${view}  grid gap-5 h-full max-h-screen overflow-y-scroll  pr-2 
      [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 `}
      >
        <Card>
          <CardHeader>
            <CardTitle>title goes here</CardTitle>
            <CardAuthor>Author here</CardAuthor>
            <CardDescription>Description here</CardDescription>
            <p className="text-blue-600 text-sm">Read more</p>
            <p className="text-blue-600 text-sm">View Article</p>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>title goes here</CardTitle>
            <CardAuthor>Author here</CardAuthor>
            <CardDescription>Description here</CardDescription>
            <p className="text-blue-600 text-sm">Read more</p>
            <p className="text-blue-600 text-sm">View Article</p>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>title goes here</CardTitle>
            <CardAuthor>Author here</CardAuthor>
            <CardDescription>Description here</CardDescription>
            <p className="text-blue-600 text-sm">Read more</p>
            <p className="text-blue-600 text-sm">View Article</p>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>title goes here</CardTitle>
            <CardAuthor>Author here</CardAuthor>
            <CardDescription>Description here</CardDescription>
            <p className="text-blue-600 text-sm">Read more</p>
            <p className="text-blue-600 text-sm">View Article</p>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>title goes here</CardTitle>
            <CardAuthor>Author here</CardAuthor>
            <CardDescription>Description here</CardDescription>
            <p className="text-blue-600 text-sm">Read more</p>
            <p className="text-blue-600 text-sm">View Article</p>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>title goes here</CardTitle>
            <CardAuthor>Author here</CardAuthor>
            <CardDescription>Description here</CardDescription>
            <p className="text-blue-600 text-sm">Read more</p>
            <p className="text-blue-600 text-sm">View Article</p>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>title goes here</CardTitle>
            <CardAuthor>Author here</CardAuthor>
            <CardDescription>Description here</CardDescription>
            <p className="text-blue-600 text-sm">Read more</p>
            <p className="text-blue-600 text-sm">View Article</p>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>title goes here</CardTitle>
            <CardAuthor>Author here</CardAuthor>
            <CardDescription>Description here</CardDescription>
            <p className="text-blue-600 text-sm">Read more</p>
            <p className="text-blue-600 text-sm">View Article</p>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <CardTitle>title goes here</CardTitle>
            <CardAuthor>Author here</CardAuthor>
            <CardDescription>Description here</CardDescription>
            <p className="text-blue-600 text-sm">Read more</p>
            <p className="text-blue-600 text-sm">View Article</p>
          </CardHeader>
        </Card>{" "}
      </div>

      <div className="flex justify-between">
        <Button variant={"outline"}>Previous</Button>
        <Button variant={"default"} className="w-[89.16px]">
          Next
        </Button>
      </div>
    </div>
  );
}
