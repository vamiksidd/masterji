// @ts-ignore
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
      const res = localStorage.getItem("todos");
      return res ? JSON.parse(res) : [];
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

  function handleInputChange(e: { target: { name: any; value: any; }; }) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setTodo((prevTodo) => {
      const updatedTodo = { ...prevTodo, [fieldName]: fieldValue };
      console.log("Updated Todo:", updatedTodo);
      return updatedTodo;
    });
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>, id: string) {
    e.preventDefault();

    console.log(todo);
    if (todo.title.trim() && todo.date.trim()) {
      setTodos((prevTodos: any) => [
        ...prevTodos,
        {
          id: Date.now(),
          title: todo.title,
          description: todo.description,
          date: todo.date,
          column_id: id,
        },
      ]);
    }

    setTodo({ id: 0, column_id: "", title: "", description: "", date: "" });
  }

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {

    if (!isDragging) {
      try {
        if (todos) {
          localStorage.setItem("todos", JSON.stringify(todos));
        }
      } catch (error) {
        console.log("Error updating localStorage:", error);
      }
    }
  }, [todos, isDragging]);

  const onDragCard = (entryId: string, columnId: string) => {
    console.log("entryId:", entryId, "columnId:", columnId);
    setIsDragging(true);
    setDragElement({
      col_id: entryId,
      parent_id: columnId,
    });
  };
  const onDropCard = (id: string) => {
    if (dragElement?.col_id) {
      setTodos([
        ...todos.map((item: { id: string; column_id: string; }) => {
          if (dragElement?.col_id === item.id) {
            console.log(item.id);

            item.column_id = id;
          }
          return item;
        }),
      ]);
    }

    setIsDragging(false);
  };
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>, nextRef: React.MutableRefObject<null>) {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current?.focus();
    }
  }
  const handleDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, id: any) => {
    e.preventDefault();
    setTodos((prevTodos: any[]) => {
      const filterTodos = prevTodos.filter((todo) => todo.id !== id);
      try {
        localStorage.setItem("todos", JSON.stringify(filterTodos));
      } catch (error) {
        console.log("Error updating localStorage:", error);
      }

      return filterTodos;
    });
  };

  return (
    <div className="w-full mt-5">
      <div className="grid grid-cols-3 m-5 space-x-10">
        {columnData.map((column, id) => (
          <div
            key={id}
            className="bg-[#dededf] flex-col p-5 rounded-sm "
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              onDropCard(column.id);
            }}
          >
            <h1 className="text-lg text-black w-[200px] mb-3">{column.text}</h1>
            <div className="w-full rounded-sm">
              {todos.map(
                (entry: { column_id: string; id: string; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; date: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, id: React.Key | null | undefined) =>
                  entry.column_id === column.id && (
                    <div
                      key={id}
                      draggable
                      onDrag={() => onDragCard(entry.id, entry.column_id)}
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
                      <p className="">{entry.description}</p>
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
