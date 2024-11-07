import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAuthor,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function News() {
  return (
    <div className="bg-white p-5 rounded-md w-full sm:w-3/4">
      <div className="flex">
        <h1 className="text-xl font-bold">
          What's happening around the world?
        </h1>
      </div>

      <div
        className="my-5 grid-cols-1 lg:grid-cols-2 grid gap-5 h-full max-h-screen overflow-y-scroll  pr-2 
      [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
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
        <Button variant={"default"}>Previous</Button>
        <Button variant={"default"} className="w-[89.16px]">Next</Button>
      </div>
    </div>
  );
}
