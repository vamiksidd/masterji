"use client";
import React, { useEffect, useState } from "react";

import { columns } from "./dummydata";
import { TrashIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [columnData] = useState(columns);
  const [dragElement, setDragElement] = useState<{
    col_id: string;
    parent_id: string;
  } | null>(null);

  const [todos, setTodos] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const res = localStorage.getItem("todos");
        return res ? JSON.parse(res) : [];
      }
    } catch (error) {
      console.log("localstorage empty!", error);
    }
  });
  const [todo, setTodo] = useState({
    id: 0,
    column_id: "",
    title: "",
    description: "",
    date: "",
  });

  // Load todos from localStorage only on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined" && todos.length > 0) {
      try {
        localStorage.setItem("todos", JSON.stringify(todos));
      } catch (error) {
        console.error("Error updating localStorage:", error);
      }
    }
  }, [todos]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>, id: string) {
    e.preventDefault();

    if (todo.title.trim() && todo.date.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          title: todo.title,
          description: todo.description,
          date: todo.date,
          column_id: id,
        },
      ]);
      setTodo({ id: 0, column_id: "", title: "", description: "", date: "" });
    }
  }

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {

    if (!isDragging) {
      try {
        if (todos) {
          if (typeof window !== "undefined")
            localStorage.setItem("todos", JSON.stringify(todos));
        }
      } catch (error) {
        console.log("Error updating localStorage:", error);
      }
    }
  }, [todos, isDragging]);

  const onDragCard = (entryId: string, columnId: string) => {
    setIsDragging(true);
    setDragElement({
      col_id: entryId,
      parent_id: columnId,
    });
  };

  const onDropCard = (id: string) => {
    if (dragElement?.col_id) {
      setTodos((prevTodos) =>
        prevTodos.map((item) =>
          item.id === dragElement.col_id ? { ...item, column_id: id } : item
        )
      );
    }
    setIsDragging(false);
  };

  const handleDelete = (e: React.MouseEvent<SVGSVGElement>, id: string) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      try {
        if (typeof window !== "undefined")
          localStorage.setItem("todos", JSON.stringify(filterTodos));
      } catch (error) {
        console.error("Error updating localStorage:", error);
      }
      return updatedTodos;
    });
  };

  return (
    <div className="w-full mt-5">
      <div className="grid grid-cols-3 m-5 space-x-10">
        {columnData && Array.isArray(columnData) && columnData.map((column, id) => (
          <div
            key={id}
            className="bg-[#dededf] flex-col p-5 rounded-sm"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDropCard(column.id)}
          >
            <h1 className="text-lg text-black w-[200px] mb-3">{column.text}</h1>
            <div className="w-full rounded-sm">
              {todos && Array.isArray(todos) && todos.map((entry, id) =>
                entry.column_id === column.id && (
                  <div
                    key={entry.id}
                    draggable
                    onDrag={() => onDragCard(entry.id.toString(), entry.column_id)}
                    className="bg-white mb-5 rounded-sm p-2"
                  >
                    <div className="font-bold flex justify-between">
                      {entry.title}
                      <div className="flex items-center gap-5">
                        <TrashIcon
                          size={16}
                          className="hover:text-red-500"
                          onClick={(e) => handleDelete(e, entry.id)}
                        />
                      </div>
                    </div>
                    <p>{entry.description}</p>
                    <p className="text-slate-500">{entry.date}</p>
                  </div>
                )
              )}
            </div>

            <Popover>
              <PopoverTrigger className="w-full bg-white shadow-sm p-2 rounded-sm hover:bg-black hover:text-white">
                + Add new task
              </PopoverTrigger>
              <PopoverContent>
                <form
                  onSubmit={(e) => handleFormSubmit(e, column.id)}
                  className="flex-col "
                >
                  <Input
                    type="text"
                    name="title"
                    value={todo.title}
                    onChange={handleInputChange}

                    placeholder="Title"
                  />
                  <Input
                    type="text"
                    name="description"
                    value={todo.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    className="mt-5"
                  />
                  <Input
                    type="date"
                    name="date"
                    value={todo.date}
                    onChange={handleInputChange}
                    className="mt-5"
                  />
                  <button
                    type="submit"
                    className="w-full mt-5 bg-slate-400 rounded-sm p-2"
                  >
                    Add Todo
                  </button>
                </form>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
}
