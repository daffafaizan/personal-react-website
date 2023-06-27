import AnimatedComponents from "../ui/AnimatedComponents";
import Title from "../utils/Title";
import { useState, useEffect } from "react";
import TodolistCard from "./TodolistCard";
import DialogForm from "./DialogForm";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const SimpleTodolist: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Learn Typescript with Daffa", completed: false },
    { id: 2, text: "Build Todo List App", completed: false },
  ]);

  useEffect(() => {
    const todoItems = JSON.parse(localStorage.getItem("todos") ?? "{}");
    if (todoItems) {
      setTodos(todoItems);
    }
  }, []);

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  return (
    <AnimatedComponents>
      <div
        id="SimpleTodolist"
        className="flex flex-col items-center justify-center md:h-screen lg:h-screen xl:h-screen py-20"
      >
        <Title>Todo List</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => handleDelete(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </li>
          ))}
          {todos.map((todo) => (
            <TodolistCard text={todo.text}></TodolistCard>
          ))}
        </div>
        <DialogForm
          ButtonCloseText="Test"
          ButtonText="Add"
          setInput={setInput}
          handleClick={handleClick}
        />
        <input
          type="text"
          placeholder="Add todo item"
          className="h-2 bg-white border-2 p-5 rounded-md mt-10 focus:outline-none text-stone-800"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button
          className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-900 to-cyan-400 drop-shadow-md hover:scale-110 duration-300 my-5"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </AnimatedComponents>
  );
};
